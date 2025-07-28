// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Tạo version.json khi build production
  if (mode === 'production') {
    const versionData = {
      version: process.env.VITE_APP_VERSION || Date.now().toString(),
      buildTime: new Date().toISOString()
    }
    
    fs.writeFileSync(
      path.resolve(__dirname, 'public/version.json'),
      JSON.stringify(versionData, null, 2)
    )
  }

  return {
    plugins: [react()],
    // ...các cấu hình khác
  }
})