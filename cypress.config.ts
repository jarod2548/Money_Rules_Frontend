import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_baseUrl || "http://localhost:4200",
    supportFile: "cypress/support/e2e.ts",
    experimentalStudio: true

  }
});