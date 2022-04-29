import type { IMenuItem } from '@sveltinio/seo/types';
const menu: Array<IMenuItem> = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'posts',
		name: 'Posts',
		url: '/posts',
		external: false,
		weight: 2
	},
	{
		identifier: 'about',
		name: 'About',
		url: '/about',
		weight: 3
	},
	{
		identifier: 'contact',
		name: 'Contact',
		url: '/contact',
		weight: 4
	}
];

export { menu };
