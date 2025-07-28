navigator.serviceWorker.addEventListener('controllerchange', () => {
  // Hiển thị thông báo cho người dùng
  if (confirm('Phiên bản mới đã sẵn sàng! Tải lại ngay?')) {
    window.location.reload()
  }
})