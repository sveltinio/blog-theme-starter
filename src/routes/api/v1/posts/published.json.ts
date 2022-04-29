import { list, getSingle  } from '$lib/posts/apiPosts';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
	const searchFor = 'slug';
	const slug = url.searchParams.get(searchFor);

	if (slug) {
		const data = await getSingle(slug);
		return {
			status: 200,
			body: JSON.stringify(data)
		};
	} else {
		const data = await list();
		const body = data.map((item) => ({
			...item
		}));
		return {
			status: 200,
			body: JSON.stringify(body)
		};
	}
}
