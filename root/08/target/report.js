$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator_BASE_10.feature");
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
  "name": "I \u003cOperation\u003e these number",
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
        "Operation",
        "result"
      ]
    },
    {
      "cells": [
        "\"-3\"",
        "\"-4\"",
        "\"add\"",
        "\"-7\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"5\"",
        "\"add\"",
        "\"10\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"add\"",
        "\"300\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"add\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"substract\"",
        "\"-1\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"5\"",
        "\"substract\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"substract\"",
        "\"-100\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"substract\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"multiple\"",
        "\"12\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"-5\"",
        "\"multiple\"",
        "\"-25\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"multiple\"",
        "\"20000\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"multiple\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"3\"",
        "\"4\"",
        "\"divide\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"5\"",
        "\"-5\"",
        "\"divide\"",
        "\"-1\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"200\"",
        "\"divide\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"1\"",
        "\"divide\"",
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
  "name": "Check addition",
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
  "name": "the total results equal to \"12\"",
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
  "name": "the first and second number as \"5\" and \"-5\"",
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
  "name": "the total results equal to \"-25\"",
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
  "name": "the total results equal to \"20000\"",
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
  "name": "Check addition",
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
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"5\" and \"-5\"",
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
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the first and second number as \"0\" and \"1\"",
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
  "name": "the total results equal to \"0\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("features/calculator_BASE_2.feature");
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
  "name": "I \u003cOperation\u003e these number",
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
        "Operation",
        "result"
      ]
    },
    {
      "cells": [
        "\"-10\"",
        "\"-10\"",
        "\"add\"",
        "\"-4\""
      ]
    },
    {
      "cells": [
        "\"10\"",
        "\"-10\"",
        "\"add\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"110\"",
        "\"add\"",
        "\"10\""
      ]
    },
    {
      "cells": [
        "\"0\"",
        "\"0\"",
        "\"add\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"10\"",
        "\"10\"",
        "\"substract\"",
        "\"0\""
      ]
    },
    {
      "cells": [
        "\"10\"",
        "\"100\"",
        "\"substract\"",
        "\"-2\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"10\"",
        "\"substract\"",
        "\"2\""
      ]
    },
    {
      "cells": [
        "\"10000\"",
        "\"1000\"",
        "\"substract\"",
        "\"8\""
      ]
    },
    {
      "cells": [
        "\"10\"",
        "\"10\"",
        "\"multiple\"",
        "\"4\""
      ]
    },
    {
      "cells": [
        "\"-10\"",
        "\"10\"",
        "\"multiple\"",
        "\"-4\""
      ]
    },
    {
      "cells": [
        "\"-10\"",
        "\"-10\"",
        "\"multiple\"",
        "\"4\""
      ]
    },
    {
      "cells": [
        "\"1000\"",
        "\"1000\"",
        "\"multiple\"",
        "\"64\""
      ]
    },
    {
      "cells": [
        "\"10\"",
        "\"10\"",
        "\"divide\"",
        "\"1\""
      ]
    },
    {
      "cells": [
        "\"100\"",
        "\"10\"",
        "\"divide\"",
        "\"2\""
      ]
    },
    {
      "cells": [
        "\"1000\"",
        "\"10\"",
        "\"divide\"",
        "\"4\""
      ]
    },
    {
      "cells": [
        "\"-100\"",
        "\"10\"",
        "\"divide\"",
        "\"-2\""
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"-10\" and \"-10\"",
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
  "name": "the total results equal to \"-4\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"10\" and \"-10\"",
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 2",
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
  "name": "the first and second number as \"100\" and \"110\"",
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
  "name": "the number system as 2",
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "the number system as 2",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"10\" and \"100\"",
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
  "name": "the total results equal to \"-2\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"100\" and \"10\"",
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
  "name": "the total results equal to \"2\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"10000\" and \"1000\"",
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
  "name": "the total results equal to \"8\"",
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
  "name": "the number system as 2",
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
  "name": "the total results equal to \"4\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"-10\" and \"10\"",
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
  "name": "the total results equal to \"-4\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"-10\" and \"-10\"",
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
  "name": "the total results equal to \"4\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"1000\" and \"1000\"",
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
  "name": "the total results equal to \"64\"",
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
  "name": "the number system as 2",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"100\" and \"10\"",
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
  "name": "the total results equal to \"2\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"1000\" and \"10\"",
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
  "name": "the total results equal to \"4\"",
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
  "name": "the number system as 2",
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
  "name": "the first and second number as \"-100\" and \"10\"",
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
  "name": "the total results equal to \"-2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
});