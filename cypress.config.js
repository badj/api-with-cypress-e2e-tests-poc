const { defineConfig } = require("cypress");
const cypressOnFix = require('cypress-on-fix');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    videoCompression: 40,
    retries: 1,
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Cypress Test Results',
        embeddedScreenshots: true,
        embeddedVideos: true,
        inlineAssets: true,
        saveAllAttempts: true,
        screenshotsFolder: "cypress/reports/screenshots",
        screenshotOnRunFailure: true,
        experimentalStudio: true,
        experimentalWebKitSupport: true,
        videoOnRunFailure: true,
    },

    e2e: {
        async setupNodeEvents(on, config) {
            on = cypressOnFix(on);
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
            },
        // Retry enabled globally - to retry all failing tests
        // Disable this and move to individual test or specs to enable retry per
        // test or a spec only. This will retry a failed test (1 retry) when it fails
        // NOTE: Increase runMode int to increase test retries
        // *************************************************************************
        retries: {
            "runMode": 1, // Increase to attempt retries for failed tests
            "openMode": 0
        }
    },
});
