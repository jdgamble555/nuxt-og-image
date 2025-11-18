import cloudflareModules from '@cf-wasm/plugins/vite-cloudflare-modules';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    inlineDynamicImports: true,
    preset: 'vercel-edge',
    /*wasm: { esmImport: true, lazy: true },
    experimental: {
      wasm: true
    }*/
  },
  vite: {
    ssr: {
      noExternal: [/@cf-wasm\/.*/]
    },
    plugins: [
      cloudflareModules({
        target: 'edge-light'
      })
    ]
  }
})