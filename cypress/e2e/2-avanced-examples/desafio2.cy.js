/// <reference types="cypress" />

describe ("Segundo desafio", () => {

    let loginDatos
  
    before('', () => {
        cy.log('Before');
  
       cy.fixture('loginData').then(datos => {
        loginDatos = datos
       })
    })
  
  
    beforeEach('beforeEach', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.wait(3000);
  
        cy.get('#user').type(loginDatos.primerUsuario.username);
        cy.get('#pass').type(loginDatos.primerUsuario.password);
        cy.get("#submitForm").click()
    })
  
  
    it('Ingresar cinco tareas ', () =>{
  
       // INGRESADO
       cy.xpath("//a[contains(@id, 'todolistlink')]").click() 
  
       cy.xpath("//div[@class='css-hboir5']//descendant::input").type(loginDatos.numeroTareas.tarea1);
       cy.xpath("//input[@id='task']/following-sibling::button[@id='sendTask']").click();
  
       cy.xpath("//div[@class='css-hboir5']//descendant::input").type(loginDatos.numeroTareas.tarea2);
       cy.xpath("//input[@id='task']/following-sibling::button[@id='sendTask']").click();
  
       cy.xpath("//div[@class='css-hboir5']//descendant::input").type(loginDatos.numeroTareas.tarea3);
       cy.xpath("//input[@id='task']/following-sibling::button[@id='sendTask']").click();
  
       cy.xpath("//div[@class='css-hboir5']//descendant::input").type(loginDatos.numeroTareas.tarea4);
       cy.xpath("//input[@id='task']/following-sibling::button[@id='sendTask']").click();
  
       cy.xpath("//div[@class='css-hboir5']//descendant::input").type(loginDatos.numeroTareas.tarea5);
       cy.xpath("//input[@id='task']/following-sibling::button[@id='sendTask']").click();
       
       cy.wait(3000);
  
    });
  
  
  
    it('Verificar botones', () => {
  
       // INGRESADO
        cy.xpath("//a[contains(@id, 'todolistlink')]").click() 
  
        cy.xpath("//button[starts-with(@id,'all')]").should('exist');
  
        cy.xpath("//button[text()='Completed']").should('exist')
  
        cy.xpath("//button[text()='Active']").should('exist')
  
        cy.xpath("//button[text()='Remove all']").should('exist')
        cy.wait(3000);
    })
  
    it('Agregar dos tareas, completarlas y eliminar la segunda', () => {
  
        // INGRESADO
        cy.get('#todolistlink').click()
  
        cy.get('#task').type('tarea 1');
        cy.get('#sendTask').click()
  
        cy.get('#task').type('tarea 2');
        cy.get('#sendTask').click()
  
        cy.contains('tarea 1', {matchCase:false}).click()
        cy.contains('tarea 2', {matchCase:false}).click()
  
        cy.get('#completed').click()
  
        cy.contains('TaReA 2', {matchCase:false}).siblings('button').click()
        cy.wait(3000);
    })
  
  
    it('Agregar dos tareas y eliminar la primera', () => {
  
        // INGRESADO
        cy.get('#todolistlink').click()
  
        cy.get('#task').type('tarea 1');
        cy.get('#sendTask').click()
  
        cy.get('#task').type('tarea 2');
        cy.get('#sendTask').click()
  
        cy.contains('TareA 1', {matchCase:false}).siblings('button').click()
        cy.wait(3000);
    })
  
  
  }); 
  