// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'src/tests',
    outputDir: 'test-results',
    reporter: [['list'], ['json', { outputFile: 'test-results/results.json' }]],
    use: {
        headless: false,
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
});
