export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    switch (pizza) {
      case 'Margherita':
        return 7;
      case 'Caprese':
        return 9;
      case 'Formaggio':
        return 10;
      default:
        return;
    }
  }
  const topping = extras.shift();
  if (topping === 'ExtraSauce') { 
    return 1 + pizzaPrice(pizza, ...extras);
  }
  else { 
    return 2 + pizzaPrice(pizza, ...extras);
  }
}

export function orderPrice(pizzaOrders) {
  const total = pizzaOrders.reduce((acc, order) => {
    return acc + pizzaPrice(order.pizza, ...order.extras);
  }, 0);
  return total;
}
