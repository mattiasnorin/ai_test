// tests/login.spec.ts
import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { WebShopPage } from '../pages/webShopPage';
import { config } from '../config';

// Purchase Test
test('should make a purchase', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const webShopPage = new WebShopPage(page);

    await loginPage.goto();
    await loginPage.login(config.username, config.password);
    await webShopPage.verifyLoggedIn();

    // Navigate to store and make a purchase
    await webShopPage.selectProduct('1');
    await webShopPage.setAmount('1');
    await webShopPage.addToCart();
    await webShopPage.buy();
    await webShopPage.fillName('Testuser');
    await webShopPage.fillAddress('akjhaödkgh');
    await webShopPage.confirmPurchase();
    await webShopPage.closeConfirmation();
    await webShopPage.verifyBalance('9983');

});
