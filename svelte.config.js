import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				dedupe: ['svelte', 'urql']
			},
			optimizeDeps: {
				exclude: ['@urql/svelte', '@urql/exchange-request-policy', '@urql/devtools'],
				// exclude: Object.keys(pkg.dependencies || {}).filter((d) => !['graphql'].includes(d)),
				include: ['graphql']
			},
			ssr: {
				// Until https://github.com/vitejs/vite/issues/2579
				// noExternal: Object.keys(pkg.dependencies || {})
			}
		},
		adapter: adapter()
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })
	}
};

export default config;
