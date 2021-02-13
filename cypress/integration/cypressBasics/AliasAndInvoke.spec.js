describe('Working with alias',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
   it('Alias Example',()=>{

       cy.get('.news-title').eq(0).invoke('text').as('heading1') // using alias with as

       cy.get('@heading1').should('include','New online store is open!') // re using alias with @heading1
       
       
       
     

   })


   
   
   

})