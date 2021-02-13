describe('Nop Commerce',()=>{

    it('Naviagte to url',()=>{

      cy.visit('https://demo.nopcommerce.com/')

      cy.get('#small-searchterms').type('laptop')

      

      cy.xpath('//input[@value="Search"]').click()
      

    })
   


})