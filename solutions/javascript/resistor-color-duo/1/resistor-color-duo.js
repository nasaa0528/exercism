//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
	var result = '';
	if(colors.length > 2)
		colors = colors.slice(0,2); 
	for (const color of colors)
	{
		var decoded = COLOR_CODES.indexOf(color);
		if (decoded !== -1) 
			result += decoded; 
	}
	return Number(result); 
//  throw new Error("Remove this statement and implement this function");
};
const COLOR_CODES = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
