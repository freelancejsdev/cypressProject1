describe('Mouse Hover',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
    /*
   it('navbar mousehover',()=>{

      cy.xpath('(//a[text()="Computers "])[1]').trigger('mouseover') // hover
      cy.xpath('(//a[text()="Notebooks "])[1]').click({force: true})
      cy.title().should('include','nopCommerce demo store. Notebooks')

   })
   */


   it('Electronics',()=>{

    cy.xpath('(//a[text()="Electronics "])[1]').trigger('mouseover')
    cy.xpath('(//a[text()="Camera & photo "])[1]').click({force: true})
    cy.title().should('include','nopCommerce demo store. Camera &amp; photo')
 })
 

 
   
   

})