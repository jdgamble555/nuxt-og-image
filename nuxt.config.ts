// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  //modules: ['nuxt-og-image'],
  nitro: {
    preset: 'vercel-edge',
    wasm: { esmImport: true, lazy: true },
    experimental: {
      wasm: true 
    }
  }
  /*ogImage: {
    compatibility: {
      prerender: {
        chromium: false,
        sharp: false
      }
    }
  }*/,

  //modules: ['nuxt-og-image']
})