import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      CYPRESS_BASE_URL: "https://api.exchangerate.host/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
