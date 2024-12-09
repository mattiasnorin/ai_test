import {expect, test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import {StorePage} from "../pages/storePage";

test('login with Mattias', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const storePage = new StorePage (page);
  await page.goto("http://hoff.is/login");
  loginPage.login();
  const header = await storePage.header.textContent();

  expect(header).toBe("Store")
});


test('test', async ({ page }) => {
  await page.goto('http://hoff.is/login/');
  await page.getByLabel('Username').fill('mattias');
  await page.getByLabel('Password').fill('28374682376');
  await page.getByLabel('Select Role').selectOption('consumer');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByTestId('error-message')).toContainText('Incorrect password');
});