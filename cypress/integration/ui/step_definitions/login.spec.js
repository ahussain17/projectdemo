import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

import {Login} from "../../PageObjects/login"

var data = require('../../../fixtures/data.json')

var env = require('../../../fixtures/environment.json')

const loginpage = new Login()

Given('User is on Login page', ()=>{

    // loginpage.navigate()
    // cy.visit(data.url)
    cy.visit(env.url)

})
And('Login page has Logo', ()=>{
    loginpage.logo().should('be.visible')

})

And('Login page has weclome header',()=>{
    loginpage.welcome_header().should('have.text', 'Welcome to Swimlane')

})

And('Login page has welcome text',()=>{
    loginpage.welcome_txt().should('have.text', 'Prioritize alerts, remediate threats and improve operational performance.')

})

And('Login page has Username field', ()=>{

    loginpage.username().should('be.visible')
})

And('Login page has Password field', ()=>{
    loginpage.password().should('be.visible')
})
And('Login page has Login button',()=>{

    loginpage.login().should('be.visible')
})

And('User inputs valid Username', ()=>{
    cy.wait(1000)
    // loginpage.username().type('ashraf.hussain')
    loginpage.username().clear().type(data.username)

})

And('Username field is empty', ()=>{
    loginpage.username().should('be.empty')

})

And('User inputs valid Password',()=>{
    cy.wait(500)
    // loginpage.password().type('5pX6BN99Zx4XCt')
    loginpage.password().clear().type(data.password)


})

And('Password field is empty', ()=>{
    loginpage.password().should('be.empty')
})

When('User clicks Login button',()=>{
    loginpage.login().click()

}
)

Then('User logs into landing page successfully', ()=>{
   cy.url().should('contain','welcome')

})

When('User clicks toggle text visibility option',()=>{
    loginpage.toggle_password().click()

})

Then('User can view the password', ()=>{
    loginpage.password().should('have.attr', 'type', 'text')

})

Then('Password is hidden', ()=>{
    loginpage.password().should('have.attr', 'type', 'password')
})

And('Login button is disabled to click', ()=>{
    loginpage.login().should('be.disabled')
})

And('User inputs invalid Username', ()=>{

    // loginpage.username().type('ashraf.invalid')
    loginpage.username().clear().type(data.inv_username)
})

And('User inputs invalid Password', ()=>{
    // loginpage.password().type('123456789')
    loginpage.password().clear().type(data.inv_password)

})

Then('Login failed text shows', ()=>{
    loginpage.login_error_txt().should('have.text', ' Login failed. ')

})