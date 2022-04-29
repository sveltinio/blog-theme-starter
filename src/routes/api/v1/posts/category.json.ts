import { all, groupedBy } from '$lib/posts/apiCategory';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
	const searchFor = 'name';
	const slug = url.searchParams.get(searchFor);

	if (slug) {
		const data = await groupedBy(slug);
		return {
			status: 200,
			body: JSON.stringify(data)
		};
	} else {
		const data = await all();
		const body = data.map((item) => ({
			...item
		}));
		return {
			status: 200,
			body: JSON.stringify(body)
		};
	}
}
