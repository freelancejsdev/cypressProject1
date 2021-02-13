describe('Nop Commerce',()=>{

   it('Navigate to URL',()=>{
     
    cy.visit('https://demo.nopcommerce.com/')

    cy.get('#small-searchterms').type('laptop') // using id
    cy.get('input[name="q"]').type('laptop') // using attribute value css

    cy.xpath('//input[@name="q"]').type('laptop')
    cy.get('.search-box-button').click()



      
     
   })



})