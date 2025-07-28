// src/components/VersionChecker.jsx
import { useEffect } from 'react';

const VersionChecker = () => {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const res = await fetch('/version.json?' + new Date().getTime());
        const data = await res.json();
        
        if (data.version !== process.env.VITE_APP_VERSION) {
          console.log('New version available, reloading...');
          window.location.reload();
        }
      } catch (error) {
        console.error('Failed to check version:', error);
      }
    };

    // Kiểm tra mỗi 5 phút
    const interval = setInterval(checkForUpdates, 0.5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return <h2>kiem tra build 1</h2>;
};

export default VersionChecker;