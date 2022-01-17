import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react(), svgr(), tsconfigPaths()],
});
