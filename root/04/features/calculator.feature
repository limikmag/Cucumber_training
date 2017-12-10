Feature: Testing all suported operation in our calculator
We can specify number system in which we want make our calculation


  Scenario: Check addition 
    Given the number system as 2
    Given the first and second number as "10" and "100"
    When I "add" these number
    Then the total results equal to "6"

  Scenario: Check substration operation
    Given the number system as 2
    Given the first and second number as "10" and "10"
    When I "substract" these number
    Then the total results equal to "0"

  Scenario: Check multiple operation
    Given the number system as 2
    Given the first and second number as "10" and "10"
    When I "multiple" these number
    Then the total results equal to "4"

  Scenario: Check divide operation
    Given the number system as 2
    Given the first and second number as "10" and "10"
    When I "divide" these number
    Then the total results equal to "1"
