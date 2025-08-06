import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('uncaught:exception', (err, runnable) => {
      //   // ignora erros relacionados a certificados
      //   return false;
      // });
    },
    baseUrl: "http://localhost:5173/", // substitua se sua porta for diferente
    testIsolation: false,

  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
