import { Given , And , Then , When, Before} from "cypress-cucumber-preprocessor/steps";

import {Login} from "../PageObjects/login"
import { ApiAuthenticate } from "../PageObjects/UserLogin";

var data = require('../../fixtures/data')

var env = require('../../fixtures/environment.json')

var record = require('../../fixtures/models/api/record.json')

const apiAuthenticate = new ApiAuthenticate();

const loginpage = new Login()

var record_id = null;

describe("record api testing", function () {
  it ("POST mapping for record", function () {
    apiAuthenticate.login().then(function(response){
      const token = 'Bearer ' + response.body.token;
      cy.request({
        method: 'POST',
        url: `${env.api}/app/aF5sqnNFCc36kO9_J/record`,
        body: record,
        headers: {
          "Authorization": token
        }
      }).then(function (response) {
        expect(response.body).have.property('id')
        record_id =response.body.id;
        apiAuthenticate.logout(token).then(function(response){
        })
      })
    })
  })

  it ("GET mapping for record", function () {
    apiAuthenticate.login().then(function(response){
      const token = 'Bearer ' + response.body.token;
      cy.request({
        method: 'GET',
        url: `${env.api}/app/aF5sqnNFCc36kO9_J/record/${record_id}`,
        headers: {
          "Authorization": token
        }
      }).then(function (response) {
        expect(response.body).have.property('id')
        apiAuthenticate.logout(token).then(function(response){
        })
      })
    })
  })

  it ("DELETE mapping for record", function () {
    apiAuthenticate.login().then(function(response){
      const token = 'Bearer ' + response.body.token;
      cy.request({
        method: 'DELETE',
        url: `${env.api}/app/aF5sqnNFCc36kO9_J/record/${record_id}`,
        headers: {
          "Authorization": token
        }
      }).then(function (response) {
        apiAuthenticate.logout(token).then(function(response){
        })
      })
    })
  })
})