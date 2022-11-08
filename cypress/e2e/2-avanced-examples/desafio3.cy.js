/// <reference types="cypress" />

import {Productos}from'../support/pages/productos'
import {LoginPage}from'../support/pages/loginPage'

describe ('Desafio 3', () => {

    let datosLogin

    const loginPage = new LoginPage();
    const productos = new Productos();

    before("before", () => {
        cy.fixture('loginData').then(data => {
            datosLogin = data;
        });
    });

    beforeEach("beforeEach", () => {
        cy.visit('');

       // cy.get("#registertoggle").dblclick();
        cy.xpath("//span[contains(@id, 'registertoggle')]").dblclick() 

       // cy.wait(2000)
        loginPage.escribirUsuario(datosLogin.primerUsuario.username);
        loginPage.escribirContraseña(datosLogin.primerUsuario.password);
        loginPage.clickBotonLogin();
    });


    it('INGRESAR SHOP' , () => {

        const blackJacket = compra.blackJacket
        const blacktShirt = compra.blacktShirt

        productos.clickOnlineShop().click();
  
        productos.retornarBlackJacket(blackJacket).click();
        productos.clickCerraMensajeAlert().click();

        productos.retornarBlackShirt(blacktShirt).click();
        productos.clickCerraMensajeAlert().click();

        productos.clickGoShoppingCart().click();
        
        cy.xpath("//button[starts-with(text(), 'Show total')]").dblclick() 

    })

})
