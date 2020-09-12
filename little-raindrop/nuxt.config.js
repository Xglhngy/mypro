
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '小雨滴官网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '周六福，小雨滴，小雨滴官网',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '周六福，小雨滴，小雨滴官网',
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.staticfile.org/twitter-bootstrap/4.4.0/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src: 'https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js',
      },
      // { src: 'https://cdn.staticfile.org/popper.js/1.16.0/umd/popper.min.js' },
      /* 编辑器 js S  */
      // { src: 'https://unpkg.com/@toast-ui/editor@2.0.0/dist/toastui-editor-viewer.js' },
      // { src: 'https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight-all.min.js' },
      /* 编辑器 js E  */
      // {
      //   src:
      //     'https://cdn.staticfile.org/twitter-bootstrap/4.4.0/js/bootstrap.min.js',
      //   async: true, // 异步
      //   defer: true, // 延迟
      // },
      {
        src:
          'https://cdn.staticfile.org/twitter-bootstrap/4.4.0/js/bootstrap.min.js',
      },
      { src: 'https://js.users.51.la/20919391.js' }
      // { src: '/js/common.js', async: true, defer: true },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#3B8070' },
  loading: '~/components/Loading.vue',
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/reset.scss',
    '~/assets/css/common.scss',
    '~/assets/css/animate.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/router.js', ssr: false },
    { src: '~/plugins/baiduMap.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    // '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {

  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  server: {
    host: '0.0.0.0',
    port: '3000',
  },
}
