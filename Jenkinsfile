pipeline{
 agent {
     docker {
         image 'cypress/included:6.4.0'
         args '-u root:root'
     }
 }  

 stages {
     stage('Download the dependencies') {
         steps {
             sh "npm install"
         }
     }

     stage('Run API Tests') {
         steps {
             sh "npm run triggerAllTests-apiTesting"
         }
     }
 }



}