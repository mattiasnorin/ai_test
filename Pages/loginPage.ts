import {Locator, Page} from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly chooseUser: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page=page;
        this.usernameInput = page.getByLabel("UserName");
        this.passwordInput = page.getByLabel("Password");
        this.submitButton = page.getByRole('button', {name: "Login"});
        this.chooseUser = page.getByLabel('Select Role');
        this.errorMessage = page.getByTestId('error-message');
    }

    async login(string: Name, ){
        await this.usernameInput.fill("Mattias");
        await this.passwordInput.fill("sup3rs3cr3t");
        
        await this.chooseUser.selectOption("Consumer")
        await this.submitButton.click();
    }
}