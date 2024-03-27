// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile:process.env.NODE_ENV === 'production' ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', 'juggle/resize-observer'] : ['@juggle/resize-observer'],
  },
  alias: {
    '@': path.resolve(__dirname, '/')
  },
  css: ['@/assets/scss/base.scss'],
  module: [
    '@pinia/nuxt'
  ],
  vite: {
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc'] : [],
    },
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})
