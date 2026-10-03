@regression
Feature: Add product to cart

  Scenario: Add Sauce Labs Backpack to cart
    Given I am logged in successfully
    When I add Sauce Labs Backpack to the cart
    And I open the cart
    Then I should see the product in the cart