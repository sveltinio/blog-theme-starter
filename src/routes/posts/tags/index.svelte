<script lang="ts">
	import { base } from '$app/paths';

	export let metadata: Array<Sveltin.ContentMetadata>;
</script>

<div class="artifact-container">
	<div class="content">
		<h1>Grouped by Tags</h1>
		{#if metadata.length != 0}
			{#each metadata as tags }
			<h2>
				<a sveltekit:prefetch href="{base}/posts/tags/{ tags.name}">{ tags.name}</a>
			</h2>
			<ul>
				{#each tags.items as item}
					<li><a sveltekit:prefetch href="{base}/posts/{item.slug}">{item.title}</a></li>
				{/each}
			</ul>
			{/each}
		{:else}
			<h2 class="message warning">
			Please, check all your content ensuring the YAML frontmatter contains "<i>tags</i>".
			</h2>
		{/if}
	</div>
</div>
