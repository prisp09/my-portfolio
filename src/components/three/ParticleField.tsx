"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { motionState, prefersReducedMotion } from "@/lib/motion";

/*
 * One cloud of particles that morphs through four shapes as the page scrolls:
 * sphere (hero) → torus knot (about, experience) → wave field (work) → galaxy (contact).
 * Scroll speed adds turbulence and the pointer tilts the whole cloud.
 */

const TAU = Math.PI * 2;

function buildShapes(count: number) {
  const sphere = new Float32Array(count * 3);
  const knot = new Float32Array(count * 3);
  const wave = new Float32Array(count * 3);
  const galaxy = new Float32Array(count * 3);
  const random = new Float32Array(count);

  const golden = Math.PI * (3 - Math.sqrt(5));
  const cols = Math.ceil(Math.sqrt(count * 1.8));
  const rows = Math.ceil(count / cols);

  for (let i = 0; i < count; i++) {
    const r = Math.random();
    random[i] = r;
    const i3 = i * 3;

    // Fibonacci sphere with a thin shell
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const shell = 1.75 + (Math.random() - 0.5) * 0.08;
    sphere[i3] = Math.cos(theta) * ring * shell;
    sphere[i3 + 1] = y * shell;
    sphere[i3 + 2] = Math.sin(theta) * ring * shell;

    // (2,3) torus knot with some tube volume
    const t = (i / count) * TAU;
    const kr = Math.cos(3 * t) + 2.2;
    const tube = 0.2 * Math.sqrt(Math.random());
    const ta = Math.random() * TAU;
    knot[i3] = kr * Math.cos(2 * t) * 0.62 + Math.cos(ta) * tube;
    knot[i3 + 1] = kr * Math.sin(2 * t) * 0.62 + Math.sin(ta) * tube;
    knot[i3 + 2] = -Math.sin(3 * t) * 0.62 + Math.cos(ta * 1.7) * tube;

    // Wide wave field, animated in the shader
    const cx = i % cols;
    const cz = Math.floor(i / cols);
    const wx = (cx / (cols - 1) - 0.5) * 9;
    const wz = (cz / (rows - 1) - 0.5) * 5;
    wave[i3] = wx;
    wave[i3 + 1] = Math.sin(wx * 1.1) * 0.25 + Math.cos(wz * 1.6) * 0.18 - 0.4;
    wave[i3 + 2] = wz;

    // Three-arm spiral galaxy
    const arm = i % 3;
    const radius = Math.pow(Math.random(), 0.7) * 3.2;
    const spin = radius * 1.35;
    const spread = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.45;
    const angle = (arm / 3) * TAU + spin;
    galaxy[i3] = Math.cos(angle) * radius + spread;
    galaxy[i3 + 1] = (Math.random() - 0.5) * 0.18 * (1.4 - radius / 3.2);
    galaxy[i3 + 2] = Math.sin(angle) * radius + spread * 0.6;
  }

  return { sphere, knot, wave, galaxy, random };
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uTurbulence;
  uniform float uSize;
  uniform float uPixelRatio;

  attribute vec3 aKnot;
  attribute vec3 aWave;
  attribute vec3 aGalaxy;
  attribute float aRandom;

  varying float vMix;
  varying float vAlpha;

  vec3 morph(float m) {
    if (m < 1.0) return mix(position, aKnot, smoothstep(0.0, 1.0, m));
    if (m < 2.0) return mix(aKnot, aWave, smoothstep(0.0, 1.0, m - 1.0));
    return mix(aWave, aGalaxy, smoothstep(0.0, 1.0, m - 2.0));
  }

  void main() {
    float m = clamp(uMorph, 0.0, 3.0);
    vec3 p = morph(m);

    // Ripple the wave field while it is on screen
    float waveWeight = 1.0 - clamp(abs(m - 2.0), 0.0, 1.0);
    p.y += sin(p.x * 1.4 + uTime * 1.1) * cos(p.z * 1.2 + uTime * 0.8) * 0.28 * waveWeight;

    // Gentle breathing plus scroll turbulence
    float phase = aRandom * 6.2831;
    vec3 dir = normalize(p + vec3(0.0001));
    p += dir * sin(uTime * 1.4 + phase) * 0.035;
    p += vec3(sin(phase * 3.1), cos(phase * 2.3), sin(phase * 1.7)) * uTurbulence * (0.3 + aRandom);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.55 + aRandom * 0.9) / -mv.z;

    vMix = clamp(p.y * 0.35 + 0.5 + (aRandom - 0.5) * 0.5, 0.0, 1.0);
    vAlpha = 0.45 + aRandom * 0.55;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uWarm;
  uniform vec3 uCool;
  uniform float uOpacity;
  varying float vMix;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    vec3 color = mix(uWarm, uCool, vMix);
    gl_FragColor = vec4(color, a * vAlpha * uOpacity);
  }
`;

function makeUniforms() {
  return {
    uTime: { value: 0 },
    uMorph: { value: 0 },
    uTurbulence: { value: 0 },
    uSize: { value: 26 },
    uPixelRatio: { value: 1 },
    uOpacity: { value: 1 },
    uWarm: { value: new THREE.Color("#FF9F4A") },
    uCool: { value: new THREE.Color("#8FA4FF") },
  };
}

function Particles({ count, animate }: { count: number; animate: boolean }) {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const shapes = useMemo(() => buildShapes(count), [count]);
  const uniforms = useMemo(() => makeUniforms(), []);

  useFrame((state, delta) => {
    const pts = points.current;
    const mat = material.current;
    if (!pts || !mat) return;
    const u = mat.uniforms;
    const { camera, size, viewport } = state;
    const dt = Math.min(delta, 1 / 20);
    const { progress, velocity, pointerX, pointerY } = motionState;

    u.uPixelRatio.value = viewport.dpr;
    if (animate) u.uTime.value += dt;

    u.uMorph.value = THREE.MathUtils.damp(u.uMorph.value, progress * 3, 4, dt);

    const targetTurb = Math.min(Math.abs(velocity) * 0.012, 0.35);
    u.uTurbulence.value = THREE.MathUtils.damp(u.uTurbulence.value, targetTurb, 5, dt);

    // Fade back once the reader is past the hero so text stays legible,
    // then bloom again for the galaxy behind the contact section
    const wide = size.width >= 1024;
    const heroness = 1 - THREE.MathUtils.smoothstep(progress, 0, 0.1);
    const finale = THREE.MathUtils.smoothstep(progress, 0.86, 1);
    const heroOpacity = wide ? 1 : 0.6;
    u.uOpacity.value = 0.3 + heroness * (heroOpacity - 0.3) + finale * 0.45;

    // Sit to the right of the hero copy on wide screens (top-right corner on phones),
    // then drift to the centre
    const targetX = (wide ? 1.9 : 1.1) * heroness;
    const targetY = wide ? 0 : 1.3 * heroness;
    pts.position.x = THREE.MathUtils.damp(pts.position.x, targetX, 3, dt);
    pts.position.y = THREE.MathUtils.damp(pts.position.y, targetY, 3, dt);

    if (animate) pts.rotation.y += dt * 0.06;
    const tiltX = 0.35 + pointerY * 0.18 + progress * 0.4;
    pts.rotation.x = THREE.MathUtils.damp(pts.rotation.x, tiltX, 3, dt);
    pts.rotation.z = THREE.MathUtils.damp(pts.rotation.z, -pointerX * 0.12, 3, dt);

    // Slight dolly so scrolling feels like moving through the scene
    const camZ = 6.2 - Math.sin(progress * Math.PI) * 1.1;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, camZ, 3, dt);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointerX * 0.25, 2, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointerY * 0.15, 2, dt);
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={points} rotation={[0.35, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[shapes.sphere, 3]} />
        <bufferAttribute attach="attributes-aKnot" args={[shapes.knot, 3]} />
        <bufferAttribute attach="attributes-aWave" args={[shapes.wave, 3]} />
        <bufferAttribute attach="attributes-aGalaxy" args={[shapes.galaxy, 3]} />
        <bufferAttribute attach="attributes-aRandom" args={[shapes.random, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  const reduced = prefersReducedMotion();
  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  const count = mobile ? 4500 : 11000;

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none" }}
      camera={{ position: [0, 0, 6.2], fov: 45, near: 0.1, far: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      aria-hidden
    >
      <Particles count={count} animate={!reduced} />
    </Canvas>
  );
}
