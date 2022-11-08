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
       // cy.wait(2000);
       // cy.get("#registertoggle").dblclick();
        cy.xpath("//span[contains(@id, 'registertoggle')]").dblclick() 

       // cy.wait(2000)
        loginPage.escribirUsuario(datosLogin.primerUsuario.username);
        loginPage.escribirContraseña(datosLogin.primerUsuario.password);
        loginPage.clickBotonLogin();
    });


    it('INGRESAR SHOP' , () => {

        productos.clickOnlineShop().click();
       // cy.wait(3000); 
 
        productos.clickBlackJacket().click();
        productos.clickCerraMensajeAlert().click();
      //  cy.wait(2000);
 
        productos.clickBlacktshirt().click();
        productos.clickCerraMensajeAlert().click();
      //  cy.wait(2000); 
 
        productos.clickGoShoppingCart().click();
        
        //cy.contains('Show total price', {matchCase:false}).click()
        
        // cy.xpath("//button[contains(text(), 'Show total price')]").dblclick() 
        cy.xpath("//button[starts-with(text(), 'Show total')]").dblclick() 

       
    })

})
