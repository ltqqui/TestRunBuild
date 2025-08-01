import { useEffect, version } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const localResponse = await axios.get('/version.json');
        console.log(localResponse?.data?.version)
        if(window.localStorage.getItem('build-version')){
          if(localResponse?.data?.version!=window.localStorage.getItem('build-version')){
              window.localStorage.setItem('build-version', localResponse?.data?.version)
              window.location.reload()
          }
        }else{
          console.log(123)
          window.localStorage.setItem('build-version', localResponse?.data?.version)
        }
        
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };

    checkForUpdates(); // Chạy ngay khi component mount
    const interval = setInterval(checkForUpdates, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>React App test mới 132123123</h1>
    </div>
  );
}

export default App;