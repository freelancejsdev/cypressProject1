import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'

describe('Login to App',()=>{
    
    const homePage = new HomePage() // object of the homepage class
    const loginPage = new LoginPage() // object of the loginpage class
    
    before('Naviagte to url',()=>{
        
        homePage.navigateToUrl()
       
       
    })

    
   it('Fill Login Form',()=>{
       
     homePage.clickLogin()

     cy.title().should('include',Cypress.env("loginPageTitle"))

     loginPage.enterEmail(Cypress.env("email"))

     loginPage.enterPassword(Cypress.env("password"))

     loginPage.clickLogin()

     loginPage.verifyLogin()


   
    
     })

    
  


   
 

 
   
   

})