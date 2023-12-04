import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy requests prefixed '/api' and '/uploads'
    // setting up proxy so we don't have to keep typing out full api address 'http://localhost
    
    '/api': 'http://localhost:5000',
    '/uploads': 'http://localhost:5000',
  },
})
