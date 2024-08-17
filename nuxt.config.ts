// https://nuxt.com/docs/api/configuration/nuxt-config

// type T = 'a' | 'b'
//
// const a: T = 'c'
// const b: T = a
//
// function foo(a: number, b: number) {
//     return a + b
// }

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"]
})
