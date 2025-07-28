import { defineConfig, loadEnv } from 'vite';
import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react'; // Import plugin React

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      // pusherPlugin({
      //   key: env.VITE_PUSHER_KEY,
      //   cluster: env.VITE_PUSHER_CLUSTER,
      //   channel: 'update-channel',
      // }),
    ],
    build: {
      rollupOptions: {
        plugins: [
          {
            name: 'generate-version',
            writeBundle() {
              if (mode === 'production') {
                const version = {
                  version: env.VITE_APP_VERSION || Date.now().toString(),
                  buildTime: new Date().toISOString(),
                };
                fs.writeFileSync(
                  path.resolve(__dirname, 'public/version.json'),
                  JSON.stringify(version, null, 2)
                );
              }
            },
          },
        ],
      },
    },
    // Thêm các cấu hình khác nếu cần, ví dụ:
    server: {
      port: 3000,
      open: true,
    },
  };
});