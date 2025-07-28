import { useEffect, version } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      // window.location.reload(true); // Tải lại từ server
      try {
        // Fetch version từ file tĩnh trên public
        const localResponse = await axios.get('/version.json');
        console.log(localResponse.version, window.localStorage.getItem('build-version'))
        // window.location.reload()
        if (!localResponse.ok) {
          throw new Error('Failed to fetch local version');
        }
        // console.log(window.localStorage.getItem('build-version'))
        if(window.localStorage.getItem('build-version')){
          if(localResponse?.version!=window.localStorage.getItem('build-version')){
              window.localStorage.setItem('build-version', localResponse.version)
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
      <h1>React App o</h1>
    </div>
  );
}

export default App;