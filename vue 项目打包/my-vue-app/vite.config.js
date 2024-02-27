import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 开发或生产环境服务的公共基础路径
  // base: '/',
  base: '/activity',
  build: {
    // 打包输出目录
    // outDir: './modules',
    outDir: './activity',
  }
})