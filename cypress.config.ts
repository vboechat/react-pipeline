import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "o32t3c",
  e2e: {
    chromeWebSecurity: false,
    specPattern: "./src/**/*.cy-e2e.{ts,tsx}",
  },
});
