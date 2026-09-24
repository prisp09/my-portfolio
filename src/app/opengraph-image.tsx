import { ImageResponse } from "next/og";
import { seo } from "@/constants/constants";

export const alt = `${seo.person.fullName}, ${seo.person.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link-preview card for LinkedIn, Slack and friends
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 80% 20%, rgba(124,149,255,0.35), transparent 45%), radial-gradient(circle at 90% 90%, rgba(255,159,74,0.30), transparent 40%), #07080C",
          color: "#ECEDF1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#A0A5B2" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#FF9F4A" }} />
          priyanshupatel.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -3, lineHeight: 1 }}>
            {seo.person.fullName}
          </div>
          <div style={{ fontSize: 40, marginTop: 24, color: "#FFC38A" }}>
            Full Stack Software Engineer · Toronto
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#A0A5B2" }}>
          Go · React · TypeScript · PostgreSQL · AWS · Azure
        </div>
      </div>
    ),
    size
  );
}
