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
};
const COLOR_CODES = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
