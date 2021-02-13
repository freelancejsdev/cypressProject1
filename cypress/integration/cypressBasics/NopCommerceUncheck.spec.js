describe('Checkboxes',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
  


   it('uncheck',()=>{

    cy.get('.ico-register').click()

    cy.get('#Newsletter').uncheck()

    cy.get('#Newsletter').uncheck().should('not.be.checked')
    

    cy.get('#gender-male').check()
      
    cy.get('#gender-male').check().should('be.checked')
    

    
    
  

})
   
   
   

})