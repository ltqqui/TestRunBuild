import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Tạo file version.json khi build
  if (mode === 'production') {
    const version = {
      version: loadEnv(mode, process.cwd()).VITE_APP_VERSION || Date.now().toString(),
      buildTime: new Date().toISOString()
    };
    fs.writeFileSync(
      path.resolve(__dirname, 'public/version.json'),
      JSON.stringify(version, null, 2)
    );
  }

  return {
    // ...các config khác
  };
});