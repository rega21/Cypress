/// <reference types="cypress" />

import {Productos}from'../support/pages/productos'
import {LoginPage}from'../support/pages/loginPage'

describe ('Desafio 3', () => {

    let datosLogin, compra

    const loginPage = new LoginPage();
    const productos = new Productos();

    before("before", () => {
        cy.fixture('loginData').then(data => {
            datosLogin = data;
        });

        cy.fixture('compra').then(data => {
            compra = data;
        });
    });

    beforeEach("beforeEach", () => {
        cy.visit('');

       // cy.get("#registertoggle").dblclick();
        cy.xpath("//span[contains(@id, 'registertoggle')]").dblclick() 

        loginPage.escribirUsuario(datosLogin.primerUsuario.username);
        loginPage.escribirContraseña(datosLogin.primerUsuario.password);
        loginPage.clickBotonLogin();
    });


    it('INGRESAR SHOP' , () => {

        const blackJacket = compra.blackJacket
        const blacktShirt = compra.blacktShirt

        productos.clickOnlineShop().click();
  
        productos.comprarProducto(blackJacket).click();
        productos.clickCerraMensajeAlert().click();

        productos.comprarProducto(blacktShirt).click();
        productos.clickCerraMensajeAlert().click();

        productos.clickGoShoppingCart().click();
        
        cy.xpath("//button[starts-with(text(), 'Show total')]").dblclick() 

    })

})
