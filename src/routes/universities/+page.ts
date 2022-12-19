import {dev} from '$app/environment';
import type {PageLoad} from './$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

async function fetchUniversities(fetch, country: string) {
    const result = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const data = await result.json();
    return data;
}

export const load = (async ({fetch, url}) => {
    const searchCountry = url.searchParams.get('query') ?? '';
    console.log(searchCountry)
    return {
        universities: await fetchUniversities(fetch, searchCountry),
    };
}) satisfies PageLoad;


