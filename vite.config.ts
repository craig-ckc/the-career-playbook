import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    script: 'defer',
    dirStyle: 'nested',
    formatting: 'minify',
  },
})
