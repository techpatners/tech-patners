import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',

      // ✅ CORS FIX: proxy request to Google Apps Script
      proxy: {
        '/api/lead': {
          target: 'https://script.google.com',
          changeOrigin: true,
          secure: true,
          // If Google redirects, follow it
          followRedirects: true,

          // ✅ rewrite your local endpoint to actual GAS path
          rewrite: () =>
            '/macros/s/AKfycbyIEUrG9OG3M1jBt8lztPpoXzlQ_RPKRsTGWFl73YYpy30jA66FnRFOuDq8yp-8sEvsrA/exec?token=techpatners_mail_api_key',
        },
      },
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.VITE_WEB3FORMS_KEY': JSON.stringify('eca4572a-e648-4dbe-b285-4b701f47f84f'),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
