class CheckoutPage{

constructor(page){
    this.page = page;
    this.checkoutButton = this.page.locator('#checkout');
    this.firstNameInput = this.page.locator('#first-name');
    this.lastNameInput = this.page.locator('#last-name');
    this.postalCodeInput = this.page.locator('#postal-code');
    this.continueButton = this.page.locator('#continue');
    this.finishButton = this.page.locator('#finish');
    this.orderConfirmation = this.page.locator('.complete-header');
}

async clickCheckout(){
    await this.checkoutButton.click();
}

async enterCustomerDetails(firstName, lastName, postalCode){
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
}

async clickContinue(){
    await this.continueButton.click();
}

async clickFinish(){
    await this.finishButton.click();
}

async getOrderConfirmation(){
    return await this.orderConfirmation.textContent();
}


}

module.exports = CheckoutPage;