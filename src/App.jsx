import './App.css'
import VersionChecker from './components/VersionChecker'
function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Có bản cập nhật mới
                newWorker.postMessage({ action: 'SKIP_WAITING' })
                window.location.reload()
              }
            }
          })
        })
      })
    })
  }
  return (
    <div>
      <h1>Lâm thanh quí 123</h1>
      <VersionChecker />
    </div>
  )
}

export default App
