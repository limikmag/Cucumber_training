Feature: Testing all suported operation in our calculator
We can specify number system in which we want make our calculation

Background:
    Given the number system as 10

  Scenario Outline: Check addition 
    Given the first and second number as <first_number> and <second_number>
    When I "add" these number
    Then the total results equal to <result>

  Examples:
    | first_number   | second_number   | result   |
    |      "-3"      |      "-4"       |  "-7"    |
    |      "5"       |      "5"        |  "10"    |
    |      "100"     |      "200"      |  "300"   |
    |      "0"       |      "0"        |  "0"     |


  Scenario Outline: Check substration operation
    Given the first and second number as <first_number> and <second_number>
    When I "substract" these number
    Then the total results equal to <result>

  Examples:
    | first_number   | second_number   | result   |
    |      "3"       |      "4"        |  "-1"    |
    |      "5"       |      "5"        |  "0"     |
    |      "100"     |      "200"      |  "-100"  |
    |      "0"       |      "0"        |  "0"     |


  Scenario Outline: Check multiple operation
    Given the first and second number as "10" and "10"
    When I "multiple" these number
    Then the total results equal to "100"
    
    Examples:
    | first_number   | second_number   | result   |
    |      "3"       |      "4"        |  "12"    |
    |      "5"       |      "-5"       |  "-25"   |
    |      "100"     |      "200"      |  "20000" |
    |      "0"       |      "0"        |  "0"     |

  Scenario Outline: Check divide operation
    Given the first and second number as "10" and "10"
    When I "divide" these number
    Then the total results equal to "1"
    
    Examples:
    | first_number   | second_number   | result   |
    |      "3"       |      "4"        |  "0"    |
    |      "5"       |      "-5"       |  "-1"   |
    |      "100"     |      "200"      |  "0" |
    |      "0"       |      "1"        |  "0"     |
