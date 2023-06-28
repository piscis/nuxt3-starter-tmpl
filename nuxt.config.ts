// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    base64: false,
    download: true,
    families: {
      'Roboto': true,
      'Kalam': true,
      'Dancing Script': true,
      'Lobster': true,
      'Lato': {
        wght: [100, 300, 400, 700],
        ital: [100, 300, 400, 700],
      },
      'Fira Code': true,
      'Fira Mono': {
        wght: [400, 700],
      },
    },
  },
})
