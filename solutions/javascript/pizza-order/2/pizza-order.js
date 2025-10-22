export const pizzaPrice = (p, ...e) => (e.length) ? (e.shift() === 'ExtraSauce') ? 1 + pizzaPrice(p, ...e) : 2 + pizzaPrice(p, ...e)
    : (p === 'Margherita') ? 7 : (p === 'Caprese') ? 9 : 10;
export const orderPrice = p => p.reduce((a, o) => a + pizzaPrice(o.pizza, ...o.extras), 0);
