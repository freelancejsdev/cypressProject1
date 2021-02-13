describe('Custom Command To Click Button',()=>{

    
    before('Naviagte to url',()=>{
        
        cy.visit('/')
       
    })

    
   it('Verify Click',()=>{
       
    cy.get('.ico-register').click()
    cy.title().should('include','nopCommerce demo store. Register')

    cy.clickButton('Register')

      
     })

    
     it('Verify Click For Register Button',()=>{
       
        cy.get('.ico-register').click()
        cy.title().should('include','nopCommerce demo store. Register')
    
        cy.clickButton('Register')
    
          
     })
  

    
 

     it('Verify Click For Login Button',()=>{
       
        cy.get('.ico-login').click()
        cy.title().should('include','nopCommerce demo store. Login')  
    
    
        cy.clickButton('Log in')
    
          
     })
  
 
   
   

})