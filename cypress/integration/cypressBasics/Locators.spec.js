describe('Locator Strategies',()=>{


   it('contains',()=>{

    cy.visit('https://demo.nopcommerce.com/')

    cy.get('a:contains("Register")').click()
    

    
   })


   it('attribute selector',()=>{
       cy.get('[id="small-searchterms"]').type('books')
   })

})