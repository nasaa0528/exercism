export const score = (x,y) => {
	if ((Math.pow(x,2) + Math.pow(y,2)) <= 1) 
		return 10; 
	else if((Math.pow(x,2) + Math.pow(y,2)) <= 25)
		return 5; 
	else if ((Math.pow(x,2) + Math.pow(y,2)) <= 100)
		return 1; 
	else return 0; 
};

