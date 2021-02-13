class HomePage 
{
   navigateToUrl()
   {
       cy.visit('/')
   }

   clickRegister()
   {
       cy.get('.ico-register').click()
   } 


   clickLogin()
   {
       cy.get('.ico-login').click()
   }

   


}

export default HomePage