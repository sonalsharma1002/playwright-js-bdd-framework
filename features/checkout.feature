@regression
Feature: Checkout functionality

  Scenario: Complete checkout successfully
    Given I have a product in the cart
    When I proceed to checkout
    And I enter my checkout details
    And I complete the order
    Then I should see the order confirmation