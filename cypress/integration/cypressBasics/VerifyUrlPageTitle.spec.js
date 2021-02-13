describe('Verify Page Title and Verify Url',()=>{

    // before hook - mocha
    before('Navigate To Url',()=>{
        cy.visit('/')
    })

   it('Verify Page Title',()=>{

     cy.title().should('include',Cypress.env('homePageTitle'))

   })


   it('Verify Url',()=>{
       cy.get('.ico-register').click()
       cy.url().should('include','register?returnUrl=%2F')
   })

   

})