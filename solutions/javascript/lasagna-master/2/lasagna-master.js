export const cookingStatus = s => s ? 'Not done, please wait.' : (s === 0) ? 'Lasagna is done.' : 'You forgot to set the timer.';
export const preparationTime = (l,t=2) => l.length * t;
export const quantities = q => ({ noodles: q.filter(el => el === 'noodles').length * 50, sauce: q.filter(el => el === 'sauce').length * 0.2});
export const scaleRecipe = (r, p) => Object.fromEntries(Object.entries(r).map(([k,v]) => [k,v / 2 * p]));
export const addSecretIngredient = (l1,l2) => { l2.push(l1[l1.length-1]) }
