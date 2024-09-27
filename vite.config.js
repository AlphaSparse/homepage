import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //配置elementPlusResolver
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
  base: '/alphasparselib.github.io/',
  server: {
    port: 8080,
    host: true,
    open: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      // '/api': {
      //   target: 'http://mas.user.dev.cqxyy.net',
      //   changeOrigin: true,
      //   rewrite: (p) => p.replace(/^\/api/, '')
      // }
    },
  },
  resolve: {
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, 'src') + '/',
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 全局变量文件
        additionalData: `
        @use "@/assets/styles/element.scss" as *;
        @use "@/assets/styles/var.scss" as *;
        `,
      },
    },
  },
});
