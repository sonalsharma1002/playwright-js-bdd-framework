class ProductPage {

   constructor(page){
    this.page = page 
    this.producttitle = this.page.locator('.title');
    this.addBackpackButton = this.page.locator('#add-to-cart-sauce-labs-backpack');
    this.carticon = this.page.locator('.shopping_cart_link');
   }

    //methods
    async addBackpackToCart(){
        await this.addBackpackButton.click();
    }

    async openCart(){
        await this.carticon.click();
    }

   }


   module.exports = ProductPage;

