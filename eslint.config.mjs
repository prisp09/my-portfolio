// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactCompiler from "eslint-plugin-react-compiler";

export default tseslint.config({
  plugins: {
    "react-compiler": reactCompiler,
  },
  files: ["**/*.ts"],
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "prettier/prettier": 0,
    "spaced-comment": "off",
    "no-console": "warn",
    "consistent-return": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "no-process-exit": "off",
    "no-param-reassign": "off",
    "no-return-await": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "no-anonymous-default-export": "off",
    "prefer-destructuring": ["warn", { object: true, array: false }],
    "no-unused-vars": ["off", { argsIgnorePattern: "req|res|next|val" }],
    "no-eval": "off",
    "react-hooks/exhaustive-deps": "off",
    "prefer-const": "warn",
    "@typescript-eslint/no-empty-object-type": "warn",
    "@typescript-eslint/no-unsafe-function-type": "warn",
    "@typescript-eslint/no-wrapper-object-types": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "no-empty": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "react/no-direct-mutation-state": "off",
    "react/require-render-return": "off",
    "react-compiler/react-compiler": "error",
    curly: ["warn", "all"],
  },
});
