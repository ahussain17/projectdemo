import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

import {Login} from "../../PageObjects/login"

import { NewRecordSubmission } from "../../PageObjects/employee_submission";

import "./login.spec.js"
import { should } from "chai";

var data = require('../../../fixtures/data.json')

const form = new NewRecordSubmission();

Given('User is on landing page', ()=>{
    cy.url().should('contain','welcome')

})
When('User clicks + icon for New Employee submission',()=>{
    form.icon().click()

})
Then('New Record Form is displayed', ()=>{
    cy.url().should('contain','record')

})
And('New Record Form has EMPLOYEE PERSONAL INFORMATION section',()=>{
    form.personal_information_header().should('have.text', 'Employee Personal Information')

})

And('New Record Form has HIRING INFOMRATION section',()=>
{
    form.hiring_information_header(),should('have,text','Hiring Information')

})
And('EMPLOYEE PERSONAL INFORMATION section has First Name field',()=>{
        form.first_name().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has Last Name field',()=>{
    form.last_name().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has Street Address field', ()=>{
    
    form.street_address().should('exist')
})

And('EMPLOYEE PERSONAL INFORMATION section has City field',()=>{
    form.city().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has State field',()=>{
    form.state().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has Telephone field',()=>{
    form.telephone().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has Zip field',()=>{
    form.zip().should('exist')

})

And('EMPLOYEE PERSONAL INFORMATION section has Email field',()=>{
    form.email().should('exist')

})
And('EMPLOYEE PERSONAL INFORMATION section has Text field', ()=>{
    form.text_box().should('exist')
})

When('User click EMPLOYEE PERSONAL INFORMATION section', ()=>{
    form.personal_information_header().click()
})
Then('First Name field is hidden', ()=>
{
    form.first_name().should('not.exist')

})

Then('First Name field is visible', ()=>{
    form.first_name().should('exist')

})
And('Last Name field is hidden', ()=>{

    form.last_name().should('not.exist')

})

And('Last Name field is visible', ()=>{

    form.last_name().should('exist')

})

And('Street address field is hidden', ()=>{

    form.street_address().should('not.exist')

})

And('Street address field is visible', ()=>{

    form.street_address().should('exist')

})
And('City field is hidden', ()=>{

    form.city().should('not.exist')
})

And('City field is visible', ()=>{

    form.city().should('exist')
})

And('State field is hidden', ()=>{

    form.state().should('not.exist')
})

And('State field is visible', ()=>{

    form.state().should('exist')
})

And('Telephone field is hidden', ()=>{

    form.telephone().should('not.exist')
})

And('Telephone field is visible', ()=>{

    form.telephone().should('exist')
})
And('Zip field is hidden', ()=>{

    form.zip().should('not.exist')
})

And('Zip field is visible', ()=>{

    form.zip().should('exist')
})
And('Email field is hidden', ()=>{

    form.email().should('not.exist')
})

When('user inputs First Name', ()=>{
    // form.first_name().type('Ashraf')
    form.first_name().clear().type(data.first_name)
})

And('user inputs Last Name', ()=>{
    // form.last_name().type('Hussain')
    form.last_name().clear().type(data.last_name)
})


Then('Save button pops up', ()=>{
    form.save_form_btn().should('exist')
    form.save_form_btn().should('be.visible')
})

And('user inputs street address', ()=>{
    form.street_address().type('Rose Garden Ave')
})

And('user clicks save button', ()=>{
    form.save_form_btn().click()
})

And('Time Spend modal pops up', ()=>{
    form.time_modal_header().should('have.text', 'Time Spent')
})

And('user clicks save button for Time Spend modal', ()=>{
    form.time_modal_save().click()
})
Then('three warning label shows', ()=>{
    cy.get('[class="error-messages"]').should('have.length',3).should('be.visible')
})

Then('two warning label shows', ()=>{
    cy.get('[class="error-messages"]').should('exist').should('have.length', 2)
})
Then('error notification pops up', ()=>{
    form.notification_popup().should('exist').should('contain','The record has validation error(s)!')
})

And('user inputs City', ()=>{
    // form.city().type('Madison Heights')
    form.city().clear().type(data.city)

})

And('record saved notification pops up', ()=>{
    form.record_saved_title().should('have.text', 'Record saved')
})
And('user inputs State', ()=>{
    // form.state().type('Michigan')
    form.state().clear().type(data.state)

})

And('user inputs Telephone', ()=>{
    // form.telephone().type('313-314-9991')
    form.telephone().clear().type(data.phone)

})

And('user inputs Zip', ()=>{
    // form.zip().type('48071')
    form.zip().clear().type(data.zip)


})

And('user inputs Email', ()=>{
    // form.email().type('ashhussa0809@gmail.com')
    form.email().clear().type(data.email)


})

And('user inputs invalid phone number', ()=>{
    // form.telephone().type('abcd1234')
    form.telephone().clear().type(data.inv_phone)

})

And('error message shows for Telephone', ()=>{
    form.text_box().click()
    cy.get('[class="error-messages"]').should('exist')

})

When('user inputs alphabetical zip', ()=>{
    // form.zip().type('abcde')
    form.zip().clear().type(data.inv_zip)

})

Then('zip field does not accept alphabetical value', ()=>{
    form.zip().should('be.empty')

})

And('user inputs invalid email without @', ()=>{
    // form.email().type('ashraf.com')
    form.email().clear().type(data.inv_mail1)
})
And('error message shows for email', ()=>{
    form.text_box().click()
    cy.get('[class="error-messages"]').should('exist')

})

And('user inputs invalid email without .com', ()=>{
    // form.email().type('ashraf@xyz')
    form.email().clear().type(data.inv_mail2)

})

When('User click toggle to hide empty fields', ()=>
{
    form.hide_toggle().click()
})

And('record id pops up', ()=>{
    form.record_header_link().should('exist').should('contain','NES-')
})
And('user clicks delete', ()=>{
    cy.wait(500)
    form.delete_record().click()
})
And('delete confirmation pops up', ()=>{
    form.delete_popup_header().should('exist').should('have.text', 'Delete Confirmation')
})
And('user clicks ok', ()=>
{
    cy.wait(1000)
    form.delete_ok().click()
})

And('record is deleted', ()=>{
    cy.wait(500)
    form.new_record_label().should('exist').should('have.text','New Record')
    form.first_name().should('be.empty')
    form.last_name().should('be.empty')
    form.city().should('be.empty')
})
