export const colorCode = (color) => {
	const index = COLORS.indexOf(color);
	return (index !== -1) ? index: false; 
};
export const COLORS = ['black','brown','red','orange', 'yellow','green','blue','violet','grey','white']; 
