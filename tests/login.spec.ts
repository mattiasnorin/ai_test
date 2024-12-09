// tests/login.spec.ts
import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import AxeBuilder from '@axe-core/playwright';
import { config } from '../config';
import { login, verifyLoggedIn, verifyLoggedOut } from '../helpers';

// Basic Login Test
test('should login successfully', async ({ page }: { page: Page }) => {
    await login(page, config.username, config.password);
    await verifyLoggedIn(page);
});

// Purchase Test
test('should make a purchase', async ({ page }: { page: Page }) => {
    await login(page, config.username, config.password);
    await verifyLoggedIn(page);



    // Navigate to store and make a purchase
    await page.getByTestId('select-product').selectOption('1');
  await page.getByLabel('Amount').fill('1');
  await page.getByTestId('add-to-cart-button').click();
  await page.getByRole('button', { name: 'Buy' }).click();
  await page.getByLabel('Name:').fill('Testuser');
  await page.getByLabel('Address:').fill('akjhaödkgh');
  await page.getByRole('button', { name: 'Confirm Purchase' }).click();
  await page.getByText('Close').click();
  await expect(page.getByTestId('money')).toContainText('9983');
    
});

// API Test
test('should fetch product details via API', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');
    const product = await response.json();
    expect(product).toHaveProperty('price');
    expect(product.price).toBe(15); // Verify the price is valid
});

// Accessibility Test
test('should pass accessibility tests', async ({ page }: { page: Page }) => {
    await page.goto('https://hoff.is/login');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

// Logout Test
test('should logout successfully', async ({ page }: { page: Page }) => {
    await login(page, config.username, config.password);
    await verifyLoggedIn(page);

    // Perform logout
    await page.getByRole('button', { name: 'Log Out' }).click();
    await verifyLoggedOut(page);
});
