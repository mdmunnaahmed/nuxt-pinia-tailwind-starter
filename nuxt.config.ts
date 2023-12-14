export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", '@nuxtjs/supabase'],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
  // css: ["@/assets/main.scss"],
  css: [
    { src: "~/assets/_mixins.scss", lang: "scss" },
    { src: "~/assets/_extend.scss", lang: "scss" },
    { src: "~/assets/main.scss", lang: "scss" },
  ],
  supabase: {
    redirect: false
  }
});
