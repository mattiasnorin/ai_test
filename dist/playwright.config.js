"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// playwright.config.ts
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
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
