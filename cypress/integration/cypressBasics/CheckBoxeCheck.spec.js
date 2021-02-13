describe('Checkboxes',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
    })

    
   it('check',()=>{

       cy.xpath('//a[text()="Checkboxes"]').click()

       cy.xpath('//form[@id="checkboxes"]//input[1]').check()

       cy.xpath('//form[@id="checkboxes"]//input[1]').check().should('be.checked')
       
     
      })


  it('using alias with check boxes',()=>{
      
    cy.xpath('//form[@id="checkboxes"]//input[2]').as('checkbox2')

    cy.get('@checkbox2').uncheck().should('not.be.checked')
  })
   
   
  

})