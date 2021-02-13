

const getFixtures = [
  {
      "name":"testdata1",
      "context": "1"
  },
  {
    "name":"testdata2",
    "context": "2"
  },
  {
    "name":"testdata3",
    "context": "3"
  }
]





describe('Register New User',function(){

  getFixtures.forEach((getFixture)=>{
      context(getFixture.context,function(){
        before(function(){
          cy.fixture(getFixture.name).then(function(data){
            this.data = data;
          })
        })

        it('Fill User Data',function(){

          cy.visit('https://demo.nopcommerce.com/')
          cy.get('.ico-register').click()
          cy.title().should('include','nopCommerce demo store. Register')
    
    
          cy.get('#gender-male').check()
          
          cy.get('#gender-male').check().should('be.checked')
     
          cy.get('#FirstName').type(this.data.firstName)
          cy.get('#LastName').type(this.data.lastName)
          cy.get('#Email').type(this.data.email)
          cy.get('#Password').type(this.data.password)
          cy.get('#ConfirmPassword').type(this.data.password)
     
          cy.xpath('//select[@name="DateOfBirthDay"]').select(this.data.day) 
          
          cy.xpath('//select[@name="DateOfBirthMonth"]').select(this.data.month) 
          
          cy.xpath('//select[@name="DateOfBirthYear"]').select(this.data.year)
          
          
          cy.get('#register-button').click()
          
          cy.get('.result').invoke('text').as('confMsg')
          cy.get('@confMsg').should('include','Your registration completed')
          
     
    
    
       })
      })
  })


    



})