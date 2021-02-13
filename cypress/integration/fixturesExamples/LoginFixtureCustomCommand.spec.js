before('Fixtures With This Keyword',function(){

  cy.visit('/')
  cy.fixture('loginData1').then(function(data){
    this.data=data;
  })


})


describe('Register New User',function(){


     it('Fill User Data',function(){

      cy.loginToNop(this.data.email,this.data.password)

     
 


   })



})