describe('Register New User',()=>{

    
    before('Using Fixtures As Alias',()=>{
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.fixture('example').as('data') 
    })

    
   it('Fill Register Form',()=>{


     cy.get('.ico-register').click()
     cy.title().should('include','nopCommerce demo store. Register')

     cy.get('@data').then((data)=>{

      cy.get('#gender-male').check()
      
      cy.get('#gender-male').check().should('be.checked')
 
      cy.get('#FirstName').type(data.firstName)
      cy.get('#LastName').type(data.lastName)
      cy.get('#Email').type(data.email)
      cy.get('#Password').type(data.password)
      cy.get('#ConfirmPassword').type(data.password)
 
      cy.xpath('//select[@name="DateOfBirthDay"]').select(data.day) 
      
      cy.xpath('//select[@name="DateOfBirthMonth"]').select(data.month) 
      
      cy.xpath('//select[@name="DateOfBirthYear"]').select(data.year)
      
      cy.get('#register-button').click()
      
      cy.get('.result').invoke('text').as('confMsg')
      cy.get('@confMsg').should('include','Your registration completed')
 

     })

    
   })


   
 

 
   
   

})