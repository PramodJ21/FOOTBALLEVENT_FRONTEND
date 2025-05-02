import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    host: true,
    allowedHosts: ['footballevent-frontend.onrender.com'], // Allow your frontend's domain
  },
});
