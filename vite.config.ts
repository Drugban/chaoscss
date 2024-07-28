import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
const _plugins = [react(), svgr()]
export default defineConfig({
	plugins: _plugins,
	resolve: {
		alias: {
			components: '/src/components',
			assets: '/src/assets',
			css: '/src/css',
			pages: '/src/pages',
			hooks: '/src/hooks'
		}
	}
})
