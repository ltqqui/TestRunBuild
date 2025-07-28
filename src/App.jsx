import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // Fetch version từ file tĩnh trên public
        const localResponse = await fetch('/version.json');
        console.log('Response:', localResponse);
        if (!localResponse.ok) {
          throw new Error('Failed to fetch local version');
        }

        const { version: newVersion } = await localResponse.json(); // Lấy version từ JSON
        const currentVersion = window.localStorage.getItem('build-version');

        console.log('New Version:', newVersion);
        console.log('Current Version:', currentVersion);

        if (currentVersion && currentVersion !== newVersion) {
          window.localStorage.setItem('build-version', newVersion);
          window.location.reload(); // Reload khi có phiên bản mới
        } else if (!currentVersion) {
          window.localStorage.setItem('build-version', newVersion); // Lưu phiên bản ban đầu
        }
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    checkForUpdates(); // Chạy ngay khi component mount
    const interval = setInterval(checkForUpdates, 300000); // Kiểm tra mỗi 5 phút
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>React App 123</h1>
    </div>
  );
}

export default App;