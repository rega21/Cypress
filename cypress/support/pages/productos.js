export class Productos{
    constructor() {
        this.onlineShop = '#onlineshoplink';
        this.blackJacket = '#blackJacket';
        this.cerrarMensajeAlert = '#closeModal';
        this.blacktshirt = '#blacktshirt';
        this.goShoppingCart = '#goShoppingCart';
    };


  //  cy.xpath("//a[contains(@id, 'onlineshoplink')]").dblclick() 
    
    
    

    clickOnlineShop(){
        return cy.get(this.onlineShop)
    };

    clickBlackJacket(){
        return cy.get(this.blackJacket)
    };
    clickBlacktshirt(){
        return cy.get(this.blacktshirt)
    };

    clickCerraMensajeAlert(){
        return cy.get(this.cerrarMensajeAlert)
    };

    clickGoShoppingCart(){
        return cy.get(this.goShoppingCart)
    };

    //clickTotal(){
    //    return cy.get(this.goShoppingCart)
   // };


};