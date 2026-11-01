// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://wei-303bc1.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	// Old URLs kept working after moving pages under /blog/
	redirects: {
		'/home': '/blog/home/',
		'/blog': '/blog/blog/',
		'/about': '/blog/about/',
		'/search': '/blog/search/',
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-terminal',
			weights: [400, 700],
			styles: ['normal'],
			fallbacks: ['monospace'],
		},
	],
});
