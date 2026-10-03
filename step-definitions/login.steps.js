const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const { expect } = require('@playwright/test');
//const {LoginData} = require('../utils/testData');

Given('I am on Login page', async function (){
    await this.page.goto(process.env.BASE_URL);
    console.log('opened login page');

});

When('I enter {string} and {string}', async function (username, password){
    await this.loginpage.enterUsername(username);
    await this.loginpage.enterPassword(password);
    console.log('entered username and password');
});

When('I click on the login button', async function (){
    await this.loginpage.clickLoginButton();
    console.log('Clicked login button');
});



Then('I should see {string}', async function(result){
     
if (result === 'success') {
    await expect(this.page).toHaveURL(/inventory.html/);
    console.log('Login successful');

}else if (result === 'error'){
   await expect(this.loginpage.errorMessage).toBeVisible();
        console.log('Login error message displayed');
}

    });


