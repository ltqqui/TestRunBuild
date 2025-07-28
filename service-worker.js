self.addEventListener('install', (event) => {
  self.skipWaiting(); // Kích hoạt Service Worker mới ngay lập tức
});

self.addEventListener('activate', (event) => {
  // Xóa cache cũ nếu cần
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          return caches.delete(cache);
        })
      );
    })
  );
});