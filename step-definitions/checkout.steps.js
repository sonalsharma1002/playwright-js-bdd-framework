const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { checkoutData } = require('../utils/testData');

Given('I have a product in the cart', async function () {

    await this.page.goto(process.env.BASE_URL);
    await this.loginpage.enterUsername('standard_user');
    await this.loginpage.enterPassword('secret_sauce');
    await this.loginpage.clickLoginButton();
    await this.productpage.addBackpackToCart();
    await this.productpage.openCart();

});

When('I proceed to checkout', async function(){

    await this.checkoutpage.clickCheckout();

});

When('I enter my checkout details', async function() {

    await this.checkoutpage.enterCustomerDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );
    
});

When('I complete the order', async function () {

    await this.checkoutpage.clickContinue();
    await this.checkoutpage.clickFinish();

});

Then('I should see the order confirmation', async function () {

    await expect(this.checkoutpage.orderConfirmation)
        .toHaveText('Thank you for your order!');

});