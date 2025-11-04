export const randomShipRegistryNumber = _ => `NCC-${1000 + Math.ceil(Math.random() * 8999)}`;
export const randomStardate = _ => 41000 + Math.random() * 1000;
export const randomPlanetClass = (l = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']) => l[Math.floor(Math.random() * l.length)];
