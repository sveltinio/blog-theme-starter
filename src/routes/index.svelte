<script lang="ts">
	import { website } from '$config/website.js';
	import { menu } from '$config/menu.js';
	import type { IWebPageMetadata } from '@sveltinio/seo/types';
	import { OpenGraphType, TwitterCardType } from '@sveltinio/seo/types';
	import { PageMetaTags, JsonLdWebPage } from '@sveltinio/seo';
	import { getFavicon } from '$lib/utils/strings.js';

	const homePage: IWebPageMetadata = {
		url: website.baseURL,
		title: website.title,
		description: website.seoDescription,
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: OpenGraphType.Website
		},
		twitter: {
			type: TwitterCardType.Large
		}
	};
</script>

<!-- SEO Section -->
<PageMetaTags data={homePage} />
<JsonLdWebPage data={homePage} />
<!-- End of SEO Section -->

<header>
	<ul class="menu">
		{#each menu as item}
			<li><a href={item.url} alt={item.identifier}>{item.name}</a></li>
		{/each}
	</ul>
</header>

<h1>Theme Starter Project</h1>
<h2>Sveltin</h2>
