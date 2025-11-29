// https://nuxt.com/docs/api/configuration/nuxt-config
import additionalModules from "@cf-wasm/plugins/nitro-additional-modules"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'vercel-edge',
    modules: [additionalModules({ target: "edge-light" })]
  }
})