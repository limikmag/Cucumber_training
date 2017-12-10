$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator.feature");
formatter.feature({
  "name": "Testing all suported operation in our calculator",
  "description": "We can specify number system in which we want make our calculation",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check addition",
  "description": "",
  "keyword": "Scenario"
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
  "name": "the total results equal to \"6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.the_total_results_equal_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check substration operation",
  "description": "",
  "keyword": "Scenario"
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
formatter.scenario({
  "name": "Check multiple operation",
  "description": "",
  "keyword": "Scenario"
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
formatter.scenario({
  "name": "Check divide operation",
  "description": "",
  "keyword": "Scenario"
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