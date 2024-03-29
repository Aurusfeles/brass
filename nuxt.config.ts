// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true,
        strict: true
    },
    modules: [
        '@pinia/nuxt',
    ],
    nitro: {
        plugins: ["~/server/index.ts"],
    },
})
