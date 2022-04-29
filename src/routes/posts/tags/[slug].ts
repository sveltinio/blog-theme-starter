
import { groupedBy } from '$lib/posts/apiTags';

/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
	const metadata = await groupedBy(params.slug);
	if (metadata) {
		return {
			body: {
				slug: params.slug,
				metadata
			}
		};
	}

	// return errors
	const errors: Record<string, Error> = {};
	return {
		status: 404,
		body: {
			errors
		}
	};
}
