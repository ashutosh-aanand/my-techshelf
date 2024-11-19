// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Techshelf',
			social: {
				github: 'https://github.com/ashutosh-aanand/my-techshelf',
			},
			sidebar: [
				{
					label: 'Topics',
					items: [
						{
							label: 'Topics',
							slug: 'topics/topics'
						}
					]
				},
				{
					label: 'Graphs',
					items: [
						{ label: 'Topics', slug: 'graphs/topics'},
						{ label: 'Representation', slug: 'graphs/representation'},
					]
				}
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
