// pages/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class loginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private chooseUser: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', {name: "Login"});
        this.chooseUser = page.getByLabel('Select Role');
        this.errorMessage = page.getByTestId('error-message');
    }

    async goto() {
        await this.page.goto('https://hoff.is/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.chooseUser.selectOption("Consumer")
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();
    }
}
