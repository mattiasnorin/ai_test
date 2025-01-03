// tests/login.spec.ts
import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { WebShopPage } from '../pages/webShopPage';
import { config } from '../config';

// Basic Login Test
test('should login successfully', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const webShopPage = new WebShopPage(page);

    await loginPage.goto();
    await loginPage.login(config.username, config.password);
    await webShopPage.verifyLoggedIn();
});

// Logout Test
test('should logout successfully', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);
    const webShopPage = new WebShopPage(page);

    await loginPage.goto();
    await loginPage.login(config.username, config.password);
    await webShopPage.verifyLoggedIn();

    // Perform logout
    await webShopPage.logout();
    await webShopPage.verifyLoggedOut();
});
