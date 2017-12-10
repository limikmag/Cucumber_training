Feature: Testing all suported operation in our calculator
We can specify number system in which we want make our calculation

Background:
    Given the number system as 2

  Scenario Outline: Check addition 
    Given the first and second number as <first_number> and <second_number>
    When I <Operation> these number
    Then the total results equal to <result>

    Examples:
    | first_number    | second_number    |  Operation  | result   |
    |      "-10"      |      "-10"       |    "add"    |  "-4"    |
    |      "10"       |      "-10"       |    "add"    |  "0"     |
    |      "100"      |      "110"       |    "add"    |  "10"    |
    |      "0"        |      "0"         |    "add"    |  "0"     |
    |      "10"       |      "10"        | "substract" |  "0"     |
    |      "10"       |      "100"       | "substract" |  "-2"    |
    |      "100"      |      "10"        | "substract" |  "2"     |
    |      "10000"    |      "1000"      | "substract" |  "8"     |
    |      "10"       |      "10"        | "multiple"  |  "4"     |
    |      "-10"      |      "10"        | "multiple"  |  "-4"    |
    |      "-10"      |      "-10"       | "multiple"  |  "4"     |
    |      "1000"     |      "1000"      | "multiple"  |  "64"    |
    |      "10"       |      "10"        | "divide"    |  "1"     |
    |      "100"      |      "10"        | "divide"    |  "2"     |
    |      "1000"     |      "10"        | "divide"    |  "4"     |
    |      "-100"     |      "10"        | "divide"    |  "-2"    |

    
