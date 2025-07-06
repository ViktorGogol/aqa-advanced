import js from "@eslint/js";
import globals from "globals";
// import tseslint from "typescript-eslint"; 
// import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["package-lock.json", "node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  // tseslint.configs.recommended,
  // {
  //   files: ["**/*.json"],
  //   plugins: { json },
  //   language: "json/json",
  //   extends: ["json/recommended"],
  // },
]);
