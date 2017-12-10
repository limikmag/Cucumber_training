$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator.feature");
formatter.feature({
  "name": "Testing all suported operation in our calculator",
  "description": "We can specify number system in which we want make our calculation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \u003cfirst_number\u003e and \u003csecond_number\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I \"add\" these number",
  "keyword": "When "
});
formatter.step({
  "name": "the total results equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_number",
        "second_number",
        "result"
      ]
    },
    {
      "cells": [
        "\"-3\"",
        "\"-4\"",
        "\"-7\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"5\"",
        "\"10\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"300\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"0\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"-3\" and \"-4\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"add\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"-7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"5\" and \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"add\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"10\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"100\" and \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"add\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"300\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"0\" and \"0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"add\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \u003cfirst_number\u003e and \u003csecond_number\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I \"substract\" these number",
  "keyword": "When "
});
formatter.step({
  "name": "the total results equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_number",
        "second_number",
        "result"
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"-1\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"5\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"-100\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"0\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"3\" and \"4\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"substract\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"-1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"5\" and \"5\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"substract\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"100\" and \"200\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"substract\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"-100\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"0\" and \"0\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"substract\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I \"multiple\" these number",
  "keyword": "When "
});
formatter.step({
  "name": "the total results equal to \"100\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_number",
        "second_number",
        "result"
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"12\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"-5\"",
        "\"-25\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"20000\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"0\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"multiple\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"100\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"multiple\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"100\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"multiple\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"100\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"multiple\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"100\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I \"divide\" these number",
  "keyword": "When "
});
formatter.step({
  "name": "the total results equal to \"1\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_number",
        "second_number",
        "result"
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"-5\"",
        "\"-1\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"1\"",
        "\"0\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"divide\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"divide\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"divide\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 10",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_number_system_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"10\" and \"10\"",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.the_first_and_second_number_as_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I \"divide\" these number",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_these_number(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the total results equal to \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
});