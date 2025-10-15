export const steps = (num) => {
	var steps = 0; 
	if (num <= 0){
		throw new Error('Only positive numbers are allowed'); 
	}
	else {
		while(num !== 1) {
			if (num & 1){
				num = num * 3 + 1; 
			}
			else {
				num = num / 2; 
			}
			steps++; 
		}
	}
	return steps; 
};
