describe('Stripe API', ()=>{

   it('GET list of customers',()=>{

      cy.request({
         method: 'GET',
         url:'https://api.stripe.com/v1/customers',
         auth: {
             bearer: 'sk_test_51HxTY3FXTW2b5OeLrsm2esnw8EcQD483z9qTbyCTP3p1oHLt0V0IWpM1RG1GZzBiIyEu4HGsBEHUfFG1xhrEwGgH00Y9962XVn'
         }
         
      }).then((res)=>{
          expect(res.body).have.property('data');
      }) 

   })
   


   it('GET Single Customer',()=>{
      
      cy.request({
          method:'GET',
          url:'https://api.stripe.com/v1/customers/cus_Iu0Q3MA8BMWJiO',
          auth: {
            bearer: 'sk_test_51HxTY3FXTW2b5OeLrsm2esnw8EcQD483z9qTbyCTP3p1oHLt0V0IWpM1RG1GZzBiIyEu4HGsBEHUfFG1xhrEwGgH00Y9962XVn'
        }
      }).then((res)=>{
          expect(res.body).has.property("id","cus_Iu0Q3MA8BMWJiO")
      })

   })

   it('POST create a new customer',()=>{

    cy.request({
        method:'POST',
        url:'https://api.stripe.com/v1/customers',
        headers:{
            'Content-type':'application/x-www-form-urlencoded'
        },
        auth: {
            bearer: 'sk_test_51HxTY3FXTW2b5OeLrsm2esnw8EcQD483z9qTbyCTP3p1oHLt0V0IWpM1RG1GZzBiIyEu4HGsBEHUfFG1xhrEwGgH00Y9962XVn'
        },
        body: {
            "name":"ivan",
            "email":"ivan@stripe.com",
            "description":"sdet"
        }

    }).then((res)=>{
          expect(res.body).has.property("name","ivan")
          expect(res.body).has.property("email","ivan@stripe.com")
          expect(res.body).has.property("description","sdet")
          
    })
   })


})