
import { all } from '$lib/posts/apiCategory';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const data = await all();
	const metadata = data as unknown as Array<Sveltin.ContentMetadata>;
	return {
		status: 200,
		body: { metadata }
	};
}
