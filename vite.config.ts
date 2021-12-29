import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'fastPNG',
      fileName: (format) => `fast-png.${format}.js`,
    },
  },
});
