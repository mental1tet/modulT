export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
      meta: [
        { name: 'yandex-verification', content: '4b3dd40871652fe2' },
        { name: 'google-site-verification', content: 'IsEcjRHHBYCKwQ5B7tgCttGEa4O3Kxk61ewJ-xIlNK0' },
      ],
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  serverDir: './server',

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-viewport',
    'vue-yandex-maps/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  site: {
    url: 'https://модуль-т.рф/',
    name: 'Газовые котлы наружного размещения KoMod'
  },

  sitemap: {
    sources: ['/api/urls']
  },

  robots: {
    disallow: ['/adminken'],
  },

  viewport: {
    breakpoints: {
      xs: 320,
      sm: 768,
      md: 999,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg',
  },

  yandexMaps: {
    apikey: '6e2b0323-f4da-4b24-ba65-850210e21ebd',
    lang: 'ru_RU',
  },

  shadcn: {
    prefix: '',
    componentDir: 'src/components/ui',
  },
})