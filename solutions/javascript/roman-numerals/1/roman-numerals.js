const MAP = {1: 'I', 2:'II', 3:'III', 4:'IV', 5: 'V', 6:'VI', 7: 'VII', 8:'VIII', 9:'IX', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
export const toRoman = (number) => {
	var length = number.toString().length; 
	var result = ''; 
	length = Math.pow(10, (length-1)); 
	while(number > 0) {
		let rep = Math.floor(number/length); 
		if (number >= 10) {
			if (rep === 4){
				result += MAP[length]; 
				result += MAP[length*5]; 
			}
			else if (rep === 5 & number <= 3000)
			{
				result += MAP[length*5];
			}
			else if (rep > 5 && rep < 9){
				result += MAP[length*5]; 
				for ( let i = 0; i < rep-5; i++){
					result += MAP[length]; 
				}
			}
			else if (rep === 9) {
				result += MAP[length];
				result += MAP[length*10]; 
			}
			else {
				for (let i = 0; i < rep; i++){
					result += MAP[length]; 
				}
			}
		}
		else {
			result += MAP[number]; 
		}
		var length_difference = number.toString().length - (number % length).toString().length; 
		number %= length; 
		for (let i = 0; i < length_difference; i++) {
		length /= 10; 
		}
	}
	return (result); 
};
