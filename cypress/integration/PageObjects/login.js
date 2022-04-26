
export class Login{
    // navigate()
    // {
    //     return cy.visit('https://qa-practical.qa.swimlane.io/login')
    // }
    logo()
    {
        return cy.get('.logo')
    }
    welcome_header()
    {
        return cy.get('[data-cy="welcome__message"]')
    }
    welcome_txt()
    {
        return cy.get('.subtext > .ng-tns-c4-2')
    }
    username()
    {
        return cy.get('#input-1')
    }
    password()
    {
        return cy.get('#input-2')
    }
    login()
    {
        return cy.get('[data-cy="submit__btn"]')
    }
    toggle_password()
    {
        return cy.get('.ngx-input-box-wrap > .btn')
    }
    login_error_txt()
    {
        return cy.get('.login-error')
    }
}
