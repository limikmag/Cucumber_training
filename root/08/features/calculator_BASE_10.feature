Feature: Testing all suported operation in our calculator
We can specify number system in which we want make our calculation

Background:
    Given the number system as 10

  Scenario Outline: Check addition 
    Given the first and second number as <first_number> and <second_number>
    When I <Operation> these number
    Then the total results equal to <result>

    Examples:
    | first_number   | second_number   |  Operation  | result   |
    |      "-3"      |      "-4"       |    "add"    |  "-7"    |
    |      "5"       |      "5"        |    "add"    |  "10"    |
    |      "100"     |      "200"      |    "add"    |  "300"   |
    |      "0"       |      "0"        |    "add"    |  "0"     |
    |      "3"       |      "4"        | "substract" |  "-1"    |
    |      "5"       |      "5"        | "substract" |  "0"     |
    |      "100"     |      "200"      | "substract" |  "-100"  |
    |      "0"       |      "0"        | "substract" |  "0"     |
    |      "3"       |      "4"        | "multiple"  |  "12"    |
    |      "5"       |      "-5"       | "multiple"  |  "-25"   |
    |      "100"     |      "200"      | "multiple"  |"20000"   |
    |      "0"       |      "0"        | "multiple"  |  "0"     |
    |      "3"       |      "4"        | "divide"    |  "0"     |
    |      "5"       |      "-5"       | "divide"    |  "-1"    |
    |      "100"     |      "200"      | "divide"    |  "0"     |
    |      "0"       |      "1"        | "divide"    |  "0"     |

    
