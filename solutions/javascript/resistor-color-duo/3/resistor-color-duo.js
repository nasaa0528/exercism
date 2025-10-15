export const decodedValue = (colors) => {
	if(colors.length > 2)
		colors = colors.slice(0,2);
  return +(colors.map(x => COLOR_CODES.indexOf(x))).join("");
};
const COLOR_CODES = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
