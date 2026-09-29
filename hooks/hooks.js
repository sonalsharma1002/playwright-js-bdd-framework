require('dotenv').config();
const { Before, After } = require('@cucumber/cucumber');
const {  chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

Before(async function() {
    this.browser = await chromium.launch({headless: false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginpage = new LoginPage(this.page);
    console.log('Browser launched');

});

After(async function(scenario) {

if (scenario.result.status === 'FAILED'){
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
    console.log('Failure Screenshor attached');
}

    await this.browser.close();
    console.log('Browser closed');

})
