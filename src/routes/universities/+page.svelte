<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({universities} = data)
</script>

<svelte:head>
	<title>Universities</title>
	<meta name="description" content="Universities tab" />
</svelte:head>


{#if universities.length > 0}
	<ul>
		{#each universities as item}
			<li>{item.name}</li>
		{/each}
	</ul>
{/if}