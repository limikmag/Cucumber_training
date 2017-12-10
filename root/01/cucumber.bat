javac -cp "lib/*;." src/Calculator.java
javac -cp "lib/*;." step_definitions/CalculatorSteps.java
java -cp "lib/*;." cucumber.api.cli.Main -p pretty -p html:target -g step_definitions features