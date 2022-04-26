var env = require('../../fixtures/environment.json')
var data = require('../../fixtures/data')

export class ApiAuthenticate {
    login() {
        return cy.request({
            method: 'POST',
            url: `${env.api}/user/login`,
            body: {
              "username": data.username,
              "password": data.password
            }
        })
    }

    logout(token) {
        return cy.request({
            method: 'POST',
            url: `${env.api}/user/logout`,
            headers: {
              "Authorization": token
            }
        })
    }
}