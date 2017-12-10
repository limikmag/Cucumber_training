package step_definitions;

import cucumber.api.java.en.*;
import cucumber.api.PendingException;
import src.Calculator;
import cucumber.api.junit.Cucumber;
import static org.junit.Assert.assertTrue;

public class CalculatorSteps {

    @Given("^the number system as (\\d+)$")
    public void the_number_system_as(int arg1) throws Exception {
        Calculator.numberSystem = arg1;
    }

    @Given("^the first and second number as \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_first_and_second_number_as_and(String arg1, String arg2) throws Exception {
        int number_1 = Integer.parseInt(arg1, Calculator.numberSystem);
		int number_2 = Integer.parseInt(arg2, Calculator.numberSystem);
        Calculator.first_number = number_1;
        Calculator.second_number = number_2;
    }

    @When("^I \"([^\"]*)\" these number$")
    public void i_these_number(String arg1) throws Exception {
        if(arg1.equals("add")) {
            Calculator.addition();
        }
        if(arg1.equals("substract")) {
            Calculator.substraction();
        }
        if(arg1.equals("multiple")) {
            Calculator.multiple();
        }
        if(arg1.equals("divide")) {
            Calculator.divide();
        }
    }

    @Then("^the total results equal to \"([^\"]*)\"$")
    public void the_total_results_equal_to(String arg1) throws Exception {
        assertTrue(arg1.equals(Integer.toString(Calculator.result)));
    }


}

