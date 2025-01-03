import { Page, expect } from '@playwright/test';
import { config } from '../config';

export class WebShopPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyLoggedIn() {
        await expect(this.page.getByTestId('username')).toContainText(`${config.username}`);
    }

    async verifyLoggedOut() {
        await this.page.waitForURL('https://hoff.is/login/');
        await this.page.locator('button', { hasText: 'Login' }).waitFor();
    }

    async selectProduct(productId: string) {
        await this.page.getByTestId('select-product').selectOption(productId);
    }

    async setAmount(amount: string) {
        await this.page.getByLabel('Amount').fill(amount);
    }

    async addToCart() {
        await this.page.getByTestId('add-to-cart-button').click();
    }

    async buy() {
        await this.page.getByRole('button', { name: 'Buy' }).click();
    }

    async fillName(name: string) {
        await this.page.getByLabel('Name:').fill(name);
    }

    async fillAddress(address: string) {
        await this.page.getByLabel('Address:').fill(address);
    }

    async confirmPurchase() {
        await this.page.getByRole('button', { name: 'Confirm Purchase' }).click();
    }

    async closeConfirmation() {
        await this.page.getByText('Close').click();
    }

    async verifyBalance(expectedBalance: string) {
        await expect(this.page.getByTestId('money')).toContainText(expectedBalance);
    }

    async logout() {
        await this.page.getByRole('button', { name: 'Log Out' }).click();
    }

}
