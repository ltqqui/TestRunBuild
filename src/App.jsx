import { useEffect } from 'react';
import versionJson from '../public/version.json'

function App() {
  useEffect(() => {
    console.log(versionJson) 
    const checkForUpdates = async () => {
      try {
        const response = await fetch('https://test-run-build.vercel.app/api/version');
        if (!response.ok) {
          throw new Error('Failed to fetch version');
        }
        console.log(response)
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

    const interval = setInterval(checkForUpdates, 10000); // Kiểm tra mỗi 30 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Nội dung ứng dụng */}
      <h1>React App kkk</h1>
    </div>
  );
}

export default App;