import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const pickedKeys = [
  "REACT_APP_EMAIL_SERVICE_ID",
  "REACT_APP_EMAIL_TEMPLATE_ID",
  "REACT_APP_EMAIL_PUBLIC_KEY",
  "REACT_APP_MY_NAME",
  "REACT_APP_MY_EMAIL",
];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
   const processEnv = {};
  pickedKeys.forEach(key => processEnv[key] = env[key]);
  return {
    define: {
     'process.env': processEnv
    },
    plugins: [react()],
  }
})
