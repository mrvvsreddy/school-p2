import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: ['react-router-dom', 'react-helmet-async', 'lucide-react'],
    },
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
    },
})
