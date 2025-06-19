import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  base:"/https://github.com/sepho0/e-plantShopping",
  plugins: [react()],
})
