import colors from 'vuetify/es5/util/colors'
import i18n from './i18n/i18n/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - dash-resto',
    title: 'dash-resto',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',

      {

        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-US'
          },
          {
            code: 'fr',
            name: 'Français',
            iso: 'fr-FR'

          },
          {
            code: 'es',
            name: 'Espagnol',
            iso: 'es-ES'

          }
        ],
        vueI18nLoader: true,
        defaultLocale: 'en',
        detectBrowserLanguage: {
          fallbackLocale: 'en',
          alwaysRedirect: true,
          useCookie: true,
          cookieKey: 'e_locale'
        },
        vueI18n: i18n
      },
      {
        seo: true
      }

    ],
    '@nuxtjs/dotenv',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: 'https://serv.resto4u.com' },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#e10a23',
          secondary: '#000000',
          anchor: '#8c9eff',
          footer: '#202329'
        }
      }
    }

  },
  env: {
    MEDIA_URL: 'https://mediaserver.resto4u.com/media/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
