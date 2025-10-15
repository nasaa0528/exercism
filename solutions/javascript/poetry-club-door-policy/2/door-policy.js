const cap = (l) => l[0].toUpperCase() + l.slice(1).toLowerCase();

export const frontDoorResponse = (l) => l.trim()[0];
export const backDoorResponse = (l) => l.trim()[l.trim().length - 1];
export const frontDoorPassword = (l) => cap(l);
export const backDoorPassword = (l) => `${cap(l)}, please`;
