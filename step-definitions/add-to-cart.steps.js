const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('I am logged in successfully', async function(){

    await this.page.goto(process.env.BASE_URL);
    await this.loginpage.enterUsername('standard_user');
    await this.loginpage.enterPassword('secret_sauce');
    await this.loginpage.clickLoginButton();
    
});

When('I add Sauce Labs Backpack to the cart', async function(){

    await this.productpage.addBackpackToCart();

});

When('I open the cart', async function(){

    await this.productpage.openCart();

});

Then('I should see the product in the cart', async function(){

    const backpack = this.page.getByText('Sauce Labs Backpack');
    await expect(backpack).toBeVisible();

});