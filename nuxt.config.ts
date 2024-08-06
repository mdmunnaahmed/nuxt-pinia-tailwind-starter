import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/css/vendor/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/app.css" },
      ],

      script: [
        { src: "/js/vendor/jquery-3.6.0.min.js", defer: true },
      ],
    },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
});
