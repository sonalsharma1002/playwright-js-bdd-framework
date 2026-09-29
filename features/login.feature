Feature: Login functionality

  Scenario Outline: Login with different credentials
    Given I am on Login page
    When I enter "<username>" and "<password>"
    And I click on the login button
    Then I should see "<result>"

    Examples:
      | username      | password       | result  |
      | standard_user | secret_sauce   | success |
      | invalid_user  | wrong_password | error   |