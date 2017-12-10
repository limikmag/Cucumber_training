Feature: Testing all suported operation in our calculator

  Scenario: Check addition operation
    Given the first and second number as "1" and "3"
    When I "add" these number
    Then the total results equal to "4"

  Scenario: Check substration operation
    Given the first and second number as "0" and "2"
    When I "substract" these number
    Then the total results equal to "-2"

  Scenario: Check multiple operation
    Given the first and second number as "0" and "2"
    When I "multiple" these number
    Then the total results equal to "0"

  Scenario: Check divide operation
    Given the first and second number as "0" and "2"
    When I "divide" these number
    Then the total results equal to "0"
