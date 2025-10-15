export const needsLicense = k => ['car', 'truck'].includes(k);
export const chooseVehicle = (o1, o2) => (o1 > o2 ? o2: o1) + ' is clearly the better choice.';
export const calculateResellPrice = (o, a) => (a = (a < 3) ? .8: ((a < 11) ? .7 : .5), a * o);
