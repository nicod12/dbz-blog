import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import vsharp from "vite-plugin-vsharp"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:3000
  },
  plugins: [
    react(), 
  ],
  
})
