// vite-plugin-pusher.js
export default function pusherPlugin(options) {
  return {
    name: 'vite-plugin-pusher',
    configResolved(config) {
      if (config.command === 'serve') {
        // Development: Inject Pusher vào HMR
        config.server.hot = true
      }
    }
  }
}