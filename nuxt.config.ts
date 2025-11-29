// https://nuxt.com/docs/api/configuration/nuxt-config
import additionalModules from "@cf-wasm/plugins/nitro-additional-modules"
import inject from "@rollup/plugin-inject"
import vue from "@vitejs/plugin-vue"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel-edge',
    modules: [additionalModules({ target: "edge-light" })],
    rollupConfig: {
      plugins: [
        // 🔹 1) Let Nitro understand .vue files in server code
        vue({
          // optional, but keeps it tight:
          include: [/\.vue($|\?)/],
        }),

        // 🔹 2) Your inject plugin, now running on *compiled* JS
        inject({
          Buffer: ["buffer", "Buffer"],
          process: "process",

          // only touch plain JS/TS files
          include: [/\.(m?js|cjs|ts|jsx|tsx)$/],

          // explicitly avoid .vue ids, including ?vue&type=...
          exclude: [/\.vue($|\?)/, /node_modules/],
        }),
      ],
    },
  }
})