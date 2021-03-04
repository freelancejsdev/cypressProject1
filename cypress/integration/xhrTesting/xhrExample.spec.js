describe('XHR Testing',()=>{



   it('conduit app login',()=>{ 
        cy.visit('http://localhost:4200')
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-control').type('apiusertest.5@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('Angularjs@5')
        cy.get('.btn').click()

        

})

   it('create article',()=>{ 
   

  cy.server()
  cy.route('POST','**/articles').as('postNewArticles')


   // cy.intercept('POST','**/articles').as('postNewArticles')

    cy.get('a[ng-reflect-router-link="/editor"]').click()

    cy.get(':nth-child(1) > .form-control').type('first  article')

    cy.get(':nth-child(2) > .form-control').type('new text')

    cy.get(':nth-child(3) > .form-control').type('some desciption')

    cy.get(':nth-child(4) > .form-control').type('new test')

    cy.get('.btn').click()


    cy.wait('@postNewArticles')

    cy.get('@postNewArticles').then( xhr =>{
        console.log(xhr)
        //expect(xhr.response.statusCode).to.equal(200)
       // expect(xhr.request.body.article.body).to.equal('some desciption')
        //expect(xhr.response.body.article.description).to.equal('new text')
    })
})
   

})