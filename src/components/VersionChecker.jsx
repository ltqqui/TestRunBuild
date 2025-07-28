// src/components/VersionChecker.jsx
import { useEffect } from 'react';

const VersionChecker = () => {
  useEffect(() => {
    // Tạo file version.json trong thư mục public khi build
   

    const checkForUpdates = async () => {
      try {
        const res = await fetch(`/version.json?' + ${Date.now()}`);
        console.log(res)
        // if (!res.ok) throw new Error('Failed to fetch version');
        
        const { version } = await res.json();
        console.log(version)
        // const currentVersion = process.env.VITE_APP_VERSION || '1.0.0';
        
        // if (version !== currentVersion) {
        //   console.log(`New version available (${version}), reloading...`);
        //   // Thông báo cho user trước khi reload
        //   if (confirm('Phiên bản mới đã sẵn sàng. Cập nhật ngay?')) {
        //     window.location.reload();
        //   }
        // }
      } catch (error) {
        console.error('Version check failed:', error);
      }
    };

    // Kiểm tra ngay khi component mount
    checkForUpdates();
    
    // Sau đó kiểm tra mỗi 5 phút (đã điều chỉnh từ 0.5 phút)
    const interval = setInterval(checkForUpdates, 0.1 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return <h1>moi 124</h1>; // Ẩn component UI nếu không cần hiển thị
};

export default VersionChecker;