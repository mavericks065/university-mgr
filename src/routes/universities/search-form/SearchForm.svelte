<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher<{search: string}>();

    export let searchText = "";

    const onSearch = () => {
        dispatch('search', searchText)
    };
</script>

<div class="search-form">
    <input type="text" bind:value={searchText} data-testid="universities-search-input"/>
    <button on:click={onSearch} data-testid="universities-search-button">Search</button>
</div>

<style>
    .search-form {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 8px;
        justify-content: center;
    }
</style>