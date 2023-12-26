import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { CRX_OUTDIR } from './globalConfig'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: CRX_OUTDIR
  },
  plugins: [vue()],
})
