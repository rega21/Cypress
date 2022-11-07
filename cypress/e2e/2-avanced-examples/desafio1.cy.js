/// <reference types="cypress" />
 
describe ("Actividad complementaria 1", () => {

    const numero = Math.floor(Math.random()*1000)

    it('Primer test', () =>{

        cy.visit('');  

        cy.get('#user').type(`agustin${numero}`);
        
        cy.get('#pass').type('rega@22');

        cy.get("[value='Male']").check({force:true});

        cy.get('#day').select('8');
        cy.get('#month').select('October');
        cy.get('#year').select('1989');

        cy.get('#submitForm').click();
        cy.wait(10000);

        cy.get('#todolistlink').click();

        cy.get('#task').type('quedo pronto');

        cy.get('#sendTask').click();
        //cy.contains('send', {matchCase:false}).click();

    });

 } ); 