/// <reference types="cypress" />
 
describe ("Desafio 4", () => {

    const number = Math.floor(Math.random()*1000)
    const user = `nico${number}`

    it('Registro', () => {
        cy.request({
            method: "POST",
            url: "https://pushing-it-backend.herokuapp.com/api/register",
            body: {
                username: user,
                password: "123456!",
                gender: "other",
                day:"10",
                month:"10",
                year:"1990",
            }
        }).then(response =>{
            expect(response.status).equal(200)
        })
    }); 


    it('Logueo', () => {
        cy.request({
            method:"POST",
            url: "https://pushing-it-backend.herokuapp.com/api/login",
            body: {
                username: user,
                password: "123456!"
            }
        }).then(response =>{
            expect(response.status).equal(200)
        })
    }); 


    it('Delete', () => {
        cy.request({
            method:"DELETE",
            url: "https://pushing-it-backend.herokuapp.com/api/deleteuser/" + user,

        }).then(response =>{
            expect(response.status).equal(200)
        })
    }); 

}); 