describe('XHR Testing',()=>{

     beforeEach('routing',()=>{
         
         cy.intercept('GET','**/tags',{fixture:'tags.json'})
         cy.visit('http://localhost:4200/')
         cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
         cy.get(':nth-child(2) > .form-control').type('apiusertest.5@gmail.com')
         cy.get(':nth-child(3) > .form-control').type('Angularjs@5')
         cy.get('.btn').click()
        
     })

 

   it('global feed',()=>{
       cy.server()
      cy.route('GET','**/articles/feed*',{"articles":[],"articlesCount":0})
       cy.route('GET','**/articles*',{fixture:'articles.json'})


      
       //cy.intercept('GET','**/articles/feed*',{"articles":[],"articlesCount":0})
       //cy.intercept('GET','**/articles*',{fixture:'articles.json'})
       

       cy.contains('Global Feed').click()

       cy.get('app-article-list button').then(buttonlist =>{
           expect(buttonlist[0]).to.contain('4')
           expect(buttonlist[1]).to.contain('5')
       })
   })

 
   
    
 
 })