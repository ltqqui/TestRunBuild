// src/components/VersionChecker.jsx
import { useEffect } from 'react';

// src/components/VersionChecker.jsx
const VersionChecker = () => {
  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch(`/version.json?${Date.now()}`)
        const { version } = await res.json()
        
        if (version !== import.meta.env.VITE_APP_VERSION) {
          // Hiển thị thông báo cập nhật
          console.log(123)
        }
      } catch (error) {
        console.error('Version check failed:', error)
      }
    }

    // Kiểm tra khi trang được focus
    window.addEventListener('focus', checkVersion)
    return () => window.removeEventListener('focus', checkVersion)
  }, [])

  return <h1>abc</h1>
}

export default VersionChecker;