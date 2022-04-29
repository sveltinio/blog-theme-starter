import type { IWebSite } from '@sveltinio/seo/types';

const website: IWebSite = {
	name: 'theme-starter',
	baseURL: '',
	language: 'en-GB',
	title: 'theme-starter',
	slogan: '',
	description: '',
	seoDescription: '',
	favicon: 'favicon.ico',
	logo: 'logo.png',
	copyright: '2022, theme-starter sveltin.io',
	keywords: '',
	contactEmail: '',
	sitemap: {
		changefreq: 'weekly',
		priority: 0.5
	},
	socials: {
		linkedin: '',
		twitter: '',
		github: '',
		facebook: '',
		instagram: '',
		youtube: ''
	},
	webmaster: {
		name: 'YOUR_NAME_HERE',
		address: 'Somewhere, World (Milky Way)',
		contactEmail: ''
	}
};

export { website };
