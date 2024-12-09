// helpers.ts
import { Page, expect } from '@playwright/test';
import { config } from './config';

export async function login(page: Page, username: string, password: string) {
    await page.goto('https://hoff.is/login');
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);      
    await page.getByLabel('Select Role').selectOption("Consumer")
    await page.getByRole('button', {name: "Login"}).click();  
    await page.waitForURL('https://hoff.is/store2/?username=testuser&role=consumer');
}

export async function verifyLoggedIn(page: Page) {
    await expect(page.getByTestId('username')).toContainText(`${config.username}`);
}

export async function verifyLoggedOut(page: Page) {
    await page.waitForURL('https://hoff.is/login/');
    await page.locator('button', { hasText: 'Login' }).waitFor();

}
