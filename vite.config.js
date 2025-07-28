import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react'; // Import plugin React

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        plugins: [
          {
            name: 'generate-version',
            writeBundle() {
              if (mode === 'production') {
                const version = {
                  version: env.VITE_APP_VERSION || new Date().toISOString(), // Sử dụng ISO string thay vì timestamp thô
                  buildTime: new Date().toISOString(),
                };
                try {
                  fs.writeFileSync(
                    path.resolve(__dirname, 'public/version.json'),
                    JSON.stringify(version, null, 2)
                  );
                } catch (error) {
                  console.error('Error writing version.json:', error);
                }
              }
            },
          },
        ],
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});