import { Workbox } from 'workbox-window';
import './App.css'
import VersionChecker from './components/VersionChecker'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const response = await fetch('/api/version'); // API trả về version
        const { version } = await response.json();
        const currentVersion = localStorage.getItem('appVersion');

        if (currentVersion && currentVersion !== version) {
          localStorage.setItem('appVersion', version);
          window.location.reload(); // Reload khi có phiên bản mới
        } else {
          localStorage.setItem('appVersion', version);
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    const interval = setInterval(checkForUpdates, 30000); // Kiểm tra mỗi 30s
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Lâm thanh quí bo</h1>
    </div>
  )
}

export default App
