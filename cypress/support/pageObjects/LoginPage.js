class LoginPage
{
    
     enterEmail(em)
     {
        cy.get('#Email').type(em)
     }

     enterPassword(pw)
     {
        cy.get('#Password').type(pw)
     }
  
     clickLogin()
     {
        cy.get('.login-button').click()
     }

     verifyLogin()
     {
        cy.get('.ico-logout').should('be.visible')
     }

}

export default LoginPage