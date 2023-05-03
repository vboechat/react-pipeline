import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "./src/**/*.cy-e2e.{ts,tsx}",
  },
});
