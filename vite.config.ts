import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    viteSingleFile()
  ],
  resolve: {
    alias: {
      'figma:asset': path.resolve(__dirname, './src/assets') 
    }
  }
})