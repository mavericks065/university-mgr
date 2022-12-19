import { expect, test } from '@playwright/test';

test('universities page should have a result title', async ({ page }) => {
    await page.goto('/universities');
    expect(await page.textContent('[data-test=title]')).toBe('Universities found');
});

test('universities page should add the search parameter to the URL', async ({ page }) => {
    // given
    await page.goto('/universities?query=tutu');
    await page.getByTestId('universities-search-input').fill('France');

    // when

    let button = page.getByTestId('universities-search-button');
    await button.click({force: true})


    // then
    await expect(page.url()).toContain('universities/query=France');
});