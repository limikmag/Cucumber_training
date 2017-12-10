javac -cp "lib/*;." src/Calculator.java 
java -cp "lib/*;." cucumber.api.cli.Main -p pretty -p html:target -g step_definitions features