import { Workbox } from 'workbox-window';
import './App.css'
import VersionChecker from './components/VersionChecker'
function App() {
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');
  wb.addEventListener('waiting', () => {
    console.log(12)
    // Có bản cập nhật mới, reload trang
    wb.messageSkipWaiting();
    window.location.reload();
  });
  wb.register();
}
  return (
    <div>
      <h1>Lâm thanh quí 123</h1>
      <VersionChecker />
    </div>
  )
}

export default App
