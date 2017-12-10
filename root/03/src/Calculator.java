package src;

import java.lang.Integer;

public class Calculator {
	
	public static int first_number = 0;
	public static int second_number = 0;
	public static int numberSystem = 10;
	public static int result = 0;

	public static void addition() {		
		result = first_number + second_number;
	}
	
	public static void substraction() {
		result = first_number - second_number;
	}
	
	public static void multiple() {
		result = first_number*second_number;
	}
	
	public static void divide() throws ArithmeticException {
		result = first_number/second_number;
	}

	public static void changeNumberSystem(int number) {
		numberSystem = number;
	}
	
}
