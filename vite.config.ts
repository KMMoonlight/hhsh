import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
    https: true,
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://lab.magiconch.com/api',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }
  }
})
