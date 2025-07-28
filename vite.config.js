import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    __PUSHER_KEY__: JSON.stringify('your-pusher-key'),
    __PUSHER_CLUSTER__: JSON.stringify('your-cluster')
  }
})