// tests/accessibility.spec.ts
import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import AxeBuilder from '@axe-core/playwright';

// Accessibility Test
test('should pass accessibility tests', async ({ page }: { page: Page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});