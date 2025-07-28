import { useEffect } from 'react';
// import versionJson from '../public/version.json'

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // Fetch version từ file tĩnh trên public
        const localResponse = await fetch('/version.json');
        console.log(localResponse)
        if (!localResponse.ok) {
          throw new Error('Failed to fetch local version');
        }
        const { version: localVersion } = await localResponse.json();

        // Fetch version từ API server
        // const serverResponse = await fetch('https://test-run-build.vercel.app/api/version');
        // if (!serverResponse.ok) {
        //   throw new Error('Failed to fetch server version');
        // }
        // const { version: serverVersion } = await serverResponse.json();

        const currentVersion = localStorage.getItem('appVersion');

        console.log('Local Version:', localVersion);
        console.log('Server Version:', serverVersion);
        console.log('Current Version:', currentVersion);

        if (currentVersion && currentVersion !== serverVersion) {
          localStorage.setItem('appVersion', serverVersion);
          window.location.reload(); // Reload khi có phiên bản mới
        } else {
          localStorage.setItem('appVersion', localVersion); // Lưu phiên bản ban đầu
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    checkForUpdates(); // Chạy ngay khi component mount
    const interval = setInterval(checkForUpdates, 10000); // Kiểm tra mỗi 5 phút
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>React App </h1>
    </div>
  );
}

export default App;