// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Job Finder",
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  modules:[
    '@nuxtjs/tailwindcss'
  ]
});
