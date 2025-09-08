import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode (e.g., .env, .env.staging, .env.production)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    define: {
      // Safe default fallback in case env is missing
      __API_BASE_URL__: JSON.stringify(
        env.VITE_API_BASE_URL
      ),
    },
  }
})