import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: 'GameList',
        short_name: 'GameList',
        background_color: "#ffffff",
        theme_color: '#04042d',
        display: "fullscreen",
        description: "Keep track of all the video games you have ever played, whether on PC, console, or mobile.",
      },
      includeAssets: [
        '**/robots.txt',
        '**/logo.png',
        '**/logo_black.png'
      ],
      icons: [
        {
            src: "/favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            src: "/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
        },
        {
          src: "/favicon/maskable_icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
