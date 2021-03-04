before('Fixtures With This Keyword',function(){

 
  cy.fixture('stripe').then(function(data){
    this.data=data;
  })


})


describe('Stripe API', function(){


  

 it('GET list of customers',function(){

    cy.request({
       method: 'GET',
       url:Cypress.env('listCustUrl'),
       auth: {
           bearer: Cypress.env('bearerToken')
       }
       
    }).then(function(res){
        expect(res.body).have.property('data');
    }) 

 })
 


 it('GET Single Customer',function(){
    
    cy.request({
        method:'GET',
        url:Cypress.env('singleCustUrl'),
        auth: {
          bearer: Cypress.env('bearerToken')
      }
    }).then(function(res){
        expect(res.body).has.property("id","cus_Iu0Q3MA8BMWJiO")
        expect(res.body).has.property("description",null)
    })

 })

 it('POST create a new customer',function(){


    cy.request({
          method:'POST',
          url:Cypress.env('createCustUrl'),
          headers:{
              'Content-type':'application/x-www-form-urlencoded'
          },
          auth: {
              bearer: Cypress.env('bearerToken')
          },
          body: {
              "name":this.data.name,
              "email":this.data.email,
              "description":this.data.description
          }
  
      }).then(function(res){
      expect(res.body).has.property("name","john")
      expect(res.body).has.property("email","john@stripe.com")
      expect(res.body).has.property("description","developer")
      
})
 
 
})

})