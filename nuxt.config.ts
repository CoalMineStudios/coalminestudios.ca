import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    link: [
      // Google fonts
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        // this becomes `<link rel="preconnect" crossorigin>. See https://github.com/nuxt/vue-meta/issues/447
        crossorigin: '',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Work+Sans&display=swap',
      },
    ],
  },
  css: [
    'sanitize.css',
    'sanitize.css/forms.css',
    '@/assets/css/main.scss',
  ],
});
