// tests/api.spec.ts
import { test, expect, APIRequestContext, Page } from '@playwright/test';

// API Test
test('should fetch product details via API', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.get('https://hoff.is/store2/api/v1/price/1');
    const product = await response.json();
    expect(product).toHaveProperty('price');
    expect(product.price).toBe(15); // Verify the price is valid
});
