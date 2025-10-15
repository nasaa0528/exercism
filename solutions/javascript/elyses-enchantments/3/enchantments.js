export const getItem = (c, p) => c[p];
export const setItem = (c, p, r) => (c.splice(p, 1, r), c);
export const insertItemAtTop = (c, n) => (c.push(n), c);
export const removeItem = (c, p) => (c.splice(p,1), c);
export const removeItemFromTop = (c) => (c.pop(), c);
export const insertItemAtBottom = (c, n) => (c.unshift(n), c);
export const removeItemAtBottom = (c) => (c.shift(), c);
export const checkSizeOfStack = (c, sz) => c.length === sz;
