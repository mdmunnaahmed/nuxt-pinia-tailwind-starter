import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "/css/vendor/bootstrap.min.css" },
        { rel: "stylesheet", href: "/css/vendor/font-awesome.css" },
        { rel: "stylesheet", href: "/css/vendor/slick.css" },
        { rel: "stylesheet", href: "/css/vendor/slick-theme.css" },
        { rel: "stylesheet", href: "/css/vendor/sal.css" },
        { rel: "stylesheet", href: "/css/vendor/magnific-popup.css" },
        { rel: "stylesheet", href: "/css/vendor/green-audio-player.min.css" },
        { rel: "stylesheet", href: "/css/vendor/odometer-theme-default.css" },
        { rel: "stylesheet", href: "/css/app.css" },
      ],

      
      script: [
        { src: "/js/vendor/jquery-3.6.0.min.js", body: true, defer: true },
        { src: "/js/vendor/bootstrap.min.js", body: true, defer: true },
        { src: "/js/vendor/isotope.pkgd.min.js", body: true, defer: true },
        { src: "/js/vendor/imagesloaded.pkgd.min.js", body: true, defer: true },
        { src: "/js/vendor/odometer.min.js", body: true, defer: true },
        { src: "/js/vendor/jquery-appear.js", body: true, defer: true },
        { src: "/js/vendor/slick.min.js", body: true, defer: true },
        { src: "/js/vendor/sal.js", body: true, defer: true },
        { src: "/js/vendor/jquery.magnific-popup.min.js", body: true, defer: true },
        { src: "/js/vendor/js.cookie.js", body: true, defer: true },
        { src: "/js/vendor/jquery.style.switcher.js", body: true, defer: true },
        { src: "/js/vendor/jquery.countdown.min.js", body: true, defer: true },
        { src: "/js/vendor/tilt.js", body: true, defer: true },
        { src: "/js/vendor/green-audio-player.min.js", body: true, defer: true },
        { src: "/js/vendor/jquery.nav.js", body: true, defer: true },
      ]
    }
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", '@nuxtjs/supabase'],
  pinia: { autoImports: ["defineStore", ["defineStore", "definePiniaStore"]] },
  supabase: {
    redirect: false
  }
});
