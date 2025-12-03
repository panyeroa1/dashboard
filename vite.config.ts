import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Using '.' instead of process.cwd() avoids TypeScript errors if @types/node is missing/conflicted.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY for the Gemini Service
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Prevent other process.env access from crashing the app
      'process.env': {}
    },
    server: {
      port: 3000
    }
  };
});