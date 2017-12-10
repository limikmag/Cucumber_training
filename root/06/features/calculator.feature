Feature: Testing all suported operation in our calculator
We can specify number system in which we want make our calculation

Background:
    Given the number system as 10

  Scenario: Check addition 
    Given the first and second number as "3" and "4"
    When I "add" these number
    Then the total results equal to "7"
    Given the first and second number as "4" and "5"
    When I "add" these number
    Then the total results equal to "9"
    Given the first and second number as "5" and "6"
    When I "add" these number
    Then the total results equal to "11"

  Scenario: Check substration operation
    Given the first and second number as "10" and "10"
    When I "substract" these number
    Then the total results equal to "0"
    Given the first and second number as "23" and "10"
    When I "substract" these number
    Then the total results equal to "13"
    Given the first and second number as "34" and "10"
    When I "substract" these number
    Then the total results equal to "24"

  Scenario: Check multiple operation
    Given the first and second number as "10" and "10"
    When I "multiple" these number
    Then the total results equal to "100"
    Given the first and second number as "2" and "2"
    When I "multiple" these number
    Then the total results equal to "4"
    Given the first and second number as "2" and "0"
    When I "multiple" these number
    Then the total results equal to "0"

  Scenario: Check divide operation
    Given the first and second number as "10" and "10"
    When I "divide" these number
    Then the total results equal to "1"
    Given the first and second number as "32" and "8"
    When I "divide" these number
    Then the total results equal to "4"
    Given the first and second number as "8" and "8"
    When I "divide" these number
    Then the total results equal to "1"

