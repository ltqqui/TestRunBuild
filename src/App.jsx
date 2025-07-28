import { useEffect } from 'react';
import versionJson from '../public/version.json'

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        // Fetch version từ file tĩnh trên public
        const localResponse = await fetch('/version.json');
        console.log(versionJson)
        if (!localResponse.ok) {
          throw new Error('Failed to fetch local version');
        }
        // console.log(window.localStorage.getItem('build-version'))
        if(window.localStorage.getItem('build-version')){
          if(!versionJson.version===window.localStorage.getItem('build-version')){
              window.localStorage.setItem('build-version', versionJson.version)
              window.location.reload()
          }
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
      <h1>React App</h1>
    </div>
  );
}

export default App;