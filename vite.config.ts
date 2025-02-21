import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// 获取 __dirname 的替代方案
const __dirname = dirname(fileURLToPath(import.meta.url));

// Vite 配置
export default defineConfig({
  // 基础公共路径
  base: '/',
  
  // 插件配置
  plugins: [react()],
  
  // 依赖优化选项
  optimizeDeps: {
    exclude: ['lucide-react'], // 排除不需要预构建的依赖
  },
  
  // 构建选项
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // 入口文件
      },
    },
    outDir: 'dist',        // 输出目录
    assetsDir: 'assets',   // 静态资源目录
    sourcemap: false,      // 不生成 sourcemap
    minify: 'terser',      // 使用 terser 进行代码压缩
    terserOptions: {
      compress: {
        drop_console: true,    // 移除 console
        drop_debugger: true,   // 移除 debugger
      },
    },
    copyPublicDir: true,
  },
  
  // 路径解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 @ 指向 src 目录
    },
  },
  
  // 开发服务器配置
  server: {
    port: 3000,           // 默认端口
    strictPort: false,    // 如果端口被占用，会自动尝试下一个可用端口
    host: true,           // 监听所有地址
  },
  
  // 预览配置
  preview: {
    port: 3000,           // 默认端口
    strictPort: false,    // 如果端口被占用，会自动尝试下一个可用端口
    host: true,           // 监听所有地址
  },
});