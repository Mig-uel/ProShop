import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      // 'process.env': {},
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
    },

    plugins: [react()],
    server: {
      // proxy requests prefixed '/api' and '/uploads'
      // setting up proxy so we don't have to keep typing out full api address 'http://localhost
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        },
        '/uploads': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
