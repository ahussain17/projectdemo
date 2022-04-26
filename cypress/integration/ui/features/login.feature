Feature: Login

    Scenario: Login page elements, (logo, welcome message, Username, Password and Login button)

    Given User is on Login page
    And Login page has Logo
    And Login page has weclome header
    And Login page has welcome text
    And Login page has Username field
    And Login page has Password field
    And Login page has Login button

    Scenario: Password textbox has toggle option to view the password

    Given User is on Login page
    And User inputs valid Password
    When User clicks toggle text visibility option
    Then User can view the password

    Scenario: Password textbox has toggle option to hide the password

    Given User is on Login page
    And User inputs valid Password
    And User clicks toggle text visibility option
    And User can view the password
    When User clicks toggle text visibility option
    Then Password is hidden

    Scenario: Unable to login with empty Username and empty Password

    Given User is on Login page
    And Username field is empty
    And Password field is empty
    And Login button is disabled to click

    Scenario: Unalbe to login with valid Username and empty Password

    Given User is on Login page
    And User inputs valid Username
    And Password field is empty
    And Login button is disabled to click

    Scenario: Unable to login with empty Username and valid Password

    Given User is on Login page
    And Username field is empty
    And User inputs valid Password
    And Login button is disabled to click

    Scenario: Unable to Login with invalid Username and Invalid Password

    Given User is on Login page
    And User inputs invalid Username
    And User inputs invalid Password
    When User clicks Login button
    Then Login failed text shows

    Scenario: Unable to Login with Valid Username and Invalid Password

    Given User is on Login page
    And User inputs valid Username
    And User inputs invalid Password
    When User clicks Login button
    Then Login failed text shows

    Scenario: Unable to Login with Invalid Username and Valid Password

    Given User is on Login page
    And User inputs invalid Username
    And User inputs valid Password
    When User clicks Login button
    Then Login failed text shows

    Scenario: User can Login successfully with valid Username and Valid Password

    Given User is on Login page
    And User inputs valid Username
    And User inputs valid Password
    When User clicks Login button
    Then User logs into landing page successfully