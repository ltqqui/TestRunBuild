import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pusherPlugin from './vite-plugin-pusher'

export default defineConfig({
  plugins: [
    react(),
    pusherPlugin({
      key: process.env.VITE_PUSHER_KEY,
      cluster: process.env.VITE_PUSHER_CLUSTER,
      channel: 'update-channel'
    })
  ],
  define: {
    __PUSHER_KEY__: JSON.stringify(process.env.VITE_PUSHER_KEY),
    __PUSHER_CLUSTER__: JSON.stringify(process.env.VITE_PUSHER_CLUSTER)
  }
})