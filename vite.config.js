

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // مهم علشان يحافظ على المسارات الصحيحة بعد build
  plugins: [react()],
  build: {
    assetsDir: "assets", // يضع الصور في مجلد assets بعد build
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg'], 
});
