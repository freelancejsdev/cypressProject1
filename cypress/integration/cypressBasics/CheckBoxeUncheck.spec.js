describe('Checkboxes',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
    })

    
  


   it('uncheck',()=>{

    cy.xpath('//a[text()="Checkboxes"]').click()

    cy.xpath('//form[@id="checkboxes"]//input[2]').uncheck()

    cy.xpath('//form[@id="checkboxes"]//input[2]').uncheck().should('not.be.checked')
    

    
    
  

})
   
   
   

})