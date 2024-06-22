const cucumber = require('cypress-cucumber-preprocessor').default
// const mochawesome = require('cypress-mochawesome-reporter/plugin')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //para reports html
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // screenshotOnRunFailure=true;
      // require('cypress-mochawesome-reporter/plugin')(on); //para reports html
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
});
