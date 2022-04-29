import { list } from '$lib/posts/apiPosts';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const resourceName = 'posts';
	const data = await list();

	const items: Array<Sveltin.ContentEntry> = [];
	data.forEach((elem) => {
		const item: Sveltin.ContentEntry = {
			resource: resourceName,
			metadata: <Sveltin.YAMLFrontmatter>elem.meta,
			html: ''
		};
		items.push(item);
	});
	return {
		status: 200,
		body: {
			resourceName: resourceName,
			items: items
		}
	};
}
