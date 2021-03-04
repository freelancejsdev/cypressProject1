
  
  before('Fixtures With This Keyword',()=>{

 
    cy.fixture('stripe').as('data')
  
  
  })
  
  
  describe('Stripe API', ()=>{
  
  
    it('POST create a new customer',()=>{
  
       cy.get("@data").then((data)=>{


           
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
            "name":data.name,
            "email":data.email,
            "description":data.description
        }

    }).then(function(res){
    expect(res.body).has.property("name","john")
    expect(res.body).has.property("email","john@stripe.com")
    expect(res.body).has.property("description","developer")
    
})


          







       })
   
   
  })
  
  })