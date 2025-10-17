export const cookingStatus = s => {
  if (s) return 'Not done, please wait.';
  if (s === 0) return 'Lasagna is done.';
  return 'You forgot to set the timer.';
}

export const preparationTime = (l,t=2) => l.length * t;
export const quantities = q => {
  return {
    noodles: q.filter(e => e === 'noodles').length * 50,
    sauce: q.filter(e => e === 'sauce').length * 0.2
  };
};
export const scaleRecipe = (r, p) => {
  const nr = {...r};
  for (let k in nr){
    nr[k] = nr[k]/2*p;
  }
  return nr;
};

export const addSecretIngredient = (l1,l2) => {
  l2.push(l1[l1.length-1])
}
