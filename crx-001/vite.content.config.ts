import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { CRX_CONTENT_OUTDIR } from './globalConfig'

export default defineConfig({
    build: {
        outDir: CRX_CONTENT_OUTDIR,
        lib: {
            entry: [resolve(__dirname, 'src/content/index.ts')],
            formats: ['cjs'],
            fileName() {
                return 'content.js'
            }
        }
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue()
    ]
})