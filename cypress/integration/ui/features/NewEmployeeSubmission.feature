Feature: New Form Submission

Background: User logs in successfully

    Given User is on Login page
    And User inputs valid Username
    And User inputs valid Password
    When User clicks Login button
    Then User logs into landing page successfully

Scenario: User is able to view New Record Form

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed

Scenario: New Record Form has two section: Employess Personal information, Hiring Information

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And New Record Form has HIRING INFOMRATION section

Scenario: Employee Personal Information section elements, [First Name, Last Name, City, Street Address, State, Telephone, Zip, Email]

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And EMPLOYEE PERSONAL INFORMATION section has First Name field
And EMPLOYEE PERSONAL INFORMATION section has Last Name field
And EMPLOYEE PERSONAL INFORMATION section has Street Address field
And EMPLOYEE PERSONAL INFORMATION section has City field
And EMPLOYEE PERSONAL INFORMATION section has State field
And EMPLOYEE PERSONAL INFORMATION section has Telephone field
And EMPLOYEE PERSONAL INFORMATION section has Zip field
And EMPLOYEE PERSONAL INFORMATION section has Email field

Scenario: User can hide all the Personal Infomration section elements

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
When User click EMPLOYEE PERSONAL INFORMATION section
Then First Name field is hidden
And Last Name field is hidden
And Street address field is hidden
And City field is hidden
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: User can hide all the Personal Infomration section empty fields by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
When User click toggle to hide empty fields
Then First Name field is hidden
And Last Name field is hidden
And Street address field is hidden
And City field is hidden
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: User can hide all the empty fields except First Name by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is hidden
And Street address field is hidden
And City field is hidden
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: User can hide all the empty fields except First Name, Last Name by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is hidden
And City field is hidden
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: User can hide all the empty fields except First Name, Last Name and Street Address by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
And user inputs street address
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is visible
And City field is hidden
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: User can hide all the empty fields except First Name, Last Name Street Address and City by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
And user inputs street address
And user inputs City
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is visible
And City field is visible
And State field is hidden
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: Users able to hide Telephone, Zip and Email field except First Name, Last Name Street Address City and State by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
And user inputs street address
And user inputs City
And user inputs State
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is visible
And City field is visible
And State field is visible
And Telephone field is hidden
And Zip field is hidden
And Email field is hidden

Scenario: Users able to hide Zip and Email field except First Name, Last Name Street Address City, State and Telephone by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
And user inputs street address
And user inputs City
And user inputs State
And user inputs Telephone
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is visible
And City field is visible
And State field is visible
And Telephone field is visible
And Zip field is hidden
And Email field is hidden

Scenario: Users able to hide Email field except First Name, Last Name, Street Address City, State, Telephone and Zip by clicking toggle

Given User is on landing page 
When User clicks + icon for New Employee submission
Then New Record Form is displayed
And New Record Form has EMPLOYEE PERSONAL INFORMATION section
And user inputs First Name
And user inputs Last Name
And user inputs street address
And user inputs City
And user inputs State
And user inputs Telephone
And user inputs Zip
When User click toggle to hide empty fields
Then First Name field is visible
And Last Name field is visible
And Street address field is visible
And City field is visible
And State field is visible
And Telephone field is visible
And Zip field is visible
And Email field is hidden

Scenario: Save button pops up if user inputs any value

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
When user inputs First Name
Then Save button pops up

Scenario: Time Spent modal pops up after clicking the save button

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs street address
And user clicks save button
And Time Spend modal pops up

Scenario: Telephone field does not accept alphabetical value 

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs invalid phone number
And error message shows for Telephone

 Scenario: User is not able to input alphabetical value as Zip 

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
When user inputs alphabetical zip
Then zip field does not accept alphabetical value

Scenario: User is not able to input inavlied email address

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs invalid email without @
And error message shows for email

Scenario: User is not able to input inavlied email address

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs invalid email without .com
And error message shows for email


Scenario: User cannot save form without three mandatory fields[First Name, Last Name, City]

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs street address
And user clicks save button
And Time Spend modal pops up
When user clicks save button for Time Spend modal
Then three warning label shows

Scenario: User cannot save form with only First Name

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs First Name
And user clicks save button
And Time Spend modal pops up
When user clicks save button for Time Spend modal
Then error notification pops up

Scenario: User cannot save form with only First and Last Name

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs First Name
And user inputs Last Name
And user clicks save button
And Time Spend modal pops up
When user clicks save button for Time Spend modal
Then error notification pops up

Scenario: User is able to save form with all the three mandatory fields [First Name, Last Name, City]

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs First Name
And user inputs Last Name
And user inputs City
And user clicks save button
And Time Spend modal pops up
When user clicks save button for Time Spend modal
Then record saved notification pops up
And record id pops up
#data cleanup 
And user clicks delete
And delete confirmation pops up 
And user clicks ok
And record is deleted

Scenario: User is able to save form with all the valid information

Given User is on landing page 
And User clicks + icon for New Employee submission
And New Record Form is displayed
And user inputs First Name
And user inputs Last Name
And user inputs City
And user inputs street address
And user inputs State
And user inputs Telephone
And user inputs Zip
And user inputs Email
And user clicks save button
And Time Spend modal pops up
When user clicks save button for Time Spend modal
And record saved notification pops up
#data cleanup 
And user clicks delete
And delete confirmation pops up 
And user clicks ok
And record is deleted







