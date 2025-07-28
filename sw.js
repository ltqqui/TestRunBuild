// self.addEventListener('install', (event) => {
//   self.skipWaiting()
// })

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           return caches.delete(cacheName)
//         })
//       )
//     })
//   )
// })

// self.addEventListener('message', (event) => {
//   if (event.data.action === 'SKIP_WAITING') {
//     self.skipWaiting()
//   }
// })