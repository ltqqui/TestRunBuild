// src/utils/pusher-update.js
import Pusher from 'pusher-js'

export function initPusher() {
  const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
    cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    forceTLS: true
  })

  const channel = pusher.subscribe('update-channel')
  
  channel.bind('new-deployment', () => {
    if (import.meta.hot) {
      // Gửi signal đến Vite HMR
      import.meta.hot.send('vite:update')
    } else {
      // Fallback cho production
      if (confirm('New version available! Reload now?')) {
        window.location.reload()
      }
    }
  })
}