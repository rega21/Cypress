export class Productos{
    constructor() {
        this.onlineShop = '#onlineshoplink';
        this.cerrarMensajeAlert = '#closeModal';
        this.goShoppingCart = '#goShoppingCart';
    };


    clickOnlineShop(){
        return cy.get(this.onlineShop)
    };

    retornarBlackJacket(elegido){ 
        return cy.get(elegido)
    };
    retornarBlackShirt(elegido2){ 
        return cy.get(elegido2)
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