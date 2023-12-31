export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", '@nuxtjs/supabase','shadcn-nuxt'],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
  // css: ["@/assets/main.scss"],
  css: [
    { src: "~/assets/_mixins.scss", lang: "scss" },
    { src: "~/assets/_extend.scss", lang: "scss" },
    { src: "~/assets/main.scss", lang: "scss" },
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  supabase: {
    redirect: false
  }
});
