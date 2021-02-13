describe('Verify Page Title and Verify Url',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
   it('Verify Vote Error Message',()=>{

    cy.get('.answer:first-of-type').click()
    cy.get('#vote-poll-1').click()
    cy.get('#block-poll-vote-error-1').should('have.text','Only registered users can vote.')
    //cy.get('#block-poll-vote-error-1').should('have.text','wrtvccmnjhgfghhjk')

   })


   it('Verify Welcome Message and store in a variable',()=>{
       cy.xpath('//h2[text()="Welcome to our store"]').then(($welcomeMsg)=>{
           const msg = $welcomeMsg.text()
           cy.log(`${msg}`)
           
       })
   })

   it('Verify get text',()=>{

      cy.get('.ico-register').invoke('text').then((text)=>{
           cy.log(text)
      })
   })

 

 /*

  it('electronics',()=>{
     // cy.xpath('(//a[text()="Electronics "])[1]').click()
      cy.xpath('(//a[@title="Show products in category Digital downloads"])[1]').click()
  })
  */


   
   

})