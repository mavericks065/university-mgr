<script lang="ts">
	import type { PageData } from './$types';
	import {goto} from '$app/navigation';
	import SearchForm from "./search-form/SearchForm.svelte";

	export let data: PageData;
	let searchText = "";

	$: ({universities} = data);

	const onSearch = (event: CustomEvent<string>) => {
		searchText = event.detail;
		goto(`universities?query=${searchText}`)
	}
</script>

<svelte:head>
	<title>Universities</title>
	<meta name="description" content="Universities tab" />
</svelte:head>

<SearchForm on:search={onSearch}/>

<h3 data-test="title">Universities found</h3>

{#if universities.length > 0}
	<ul>
		{#each universities as item}
			<li>{item.name}</li>
		{/each}
	</ul>
{/if}