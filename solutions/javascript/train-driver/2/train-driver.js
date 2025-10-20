export const getListOfWagons = (...i) => i;
export const fixListOfWagons = ([f, s, ...r]) => [...r, f, s];
export const correctListOfWagons = ([f, ...r], s) => [f, ...s, ...r];
export const extendRouteInformation = (i, a) => ({...i, ...a});
export const separateTimeOfArrival = ({timeOfArrival, ...r}) => [timeOfArrival, r]; 
