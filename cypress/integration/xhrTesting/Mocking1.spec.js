describe('XHR Testing',()=>{

     beforeEach('routing',()=>{
 
         cy.intercept('GET','**/tags',{fixture:'tags.json'})
        
     })

    it('conduit app login',()=>{ 
         
        cy.visit('http://localhost:4200/')
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-control').type('apiusertest.5@gmail.com')
        cy.get(':nth-child(3) > .form-control').type('Angularjs@5')
        cy.get('.btn').click()
         cy.get('.tag-list').should('contain','javascript')
         .and('contain','ReactJS')
         .and('contain','NodeJS')
 
 })

   

 
   
    
 
 })