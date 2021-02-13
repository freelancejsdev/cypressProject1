describe('Register New User',()=>{

    
    before('Navigate To Url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    
   it('Fill Register Form',()=>{

     cy.get('.ico-register').click()
     cy.title().should('include','nopCommerce demo store. Register')

     cy.get('#gender-male').check()
      
     cy.get('#gender-male').check().should('be.checked')

     cy.get('#FirstName').type('user2')
     cy.get('#LastName').type('test2')
     cy.get('#Email').type('qauser2@nop.com')
     cy.get('#Password').type('Testing@123')
     cy.get('#ConfirmPassword').type('Testing@123')

     // drops downs
     cy.xpath('//select[@name="DateOfBirthDay"]').select('5') // select by value
     
     cy.xpath('//select[@name="DateOfBirthMonth"]').select('April') // select by text
     //.should('have.value','4') 

     cy.xpath('//select[@name="DateOfBirthYear"]').select('1999')
     //.should('have.value','1999')


     cy.get('#register-button').click()
     
     cy.get('.result').invoke('text').as('confMsg')
     cy.get('@confMsg').should('include','Your registration completed')

   })


   
 

 
   
   

})