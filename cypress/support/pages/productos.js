export class Productos{
    constructor() {
        this.onlineShop = '#onlineshoplink';
        this.cerrarMensajeAlert = '#closeModal';
        this.goShoppingCart = '#goShoppingCart';
    };

    clickOnlineShop(){
        return cy.get(this.onlineShop)
    };

    comprarProducto(elegido){ 
        return cy.get(elegido)
    };

    clickCerraMensajeAlert(){
        return cy.get(this.cerrarMensajeAlert)
    };

    clickGoShoppingCart(){
        return cy.get(this.goShoppingCart)
    };

};