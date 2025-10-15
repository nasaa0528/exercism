//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
	const numberOfDigits = number.toString().length; 
	var digits = number.toString().split(''); 
	digits = digits.map(Number); 
	digits = digits.map(digit => Math.pow(digit, numberOfDigits)); 
	const sum = digits.reduce((a,b) => a + b, 0);
	return ( (sum === number) ? true: false);
};
