// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/fonts/mathlive/mathlive-fonts.css'
    ],
    vue: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag === "math-field"
          }
        }
    },
})
