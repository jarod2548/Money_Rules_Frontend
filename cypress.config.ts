import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://frontend:80",

    setupNodeEvents(on, config) {
      return config;
    }
  }
});