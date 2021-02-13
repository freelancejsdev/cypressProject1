describe('Login to App',()=>{

    
    before('Naviagte to url',()=>{
        
        cy.visit('https://demo.nopcommerce.com/')
       
    })

    
   it('Fill Login Form',()=>{
       
    
     cy.get('.ico-login').click()
     cy.title().should('include','nopCommerce demo store. Login')  

     cy.get('#Email').type('userqa3@nop.com')
     cy.get('#Password').type('Testing@123')

     cy.get('.login-button').click()

     cy.get('.ico-logout').should('be.visible')
     

     

    
     })

    
  


   
 

 
   
   

})