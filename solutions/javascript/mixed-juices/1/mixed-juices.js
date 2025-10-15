export function timeToMixJuice(name) {
  let time = 0;
  switch(name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
    default:
      time = 2.5;
  }
  return time;
}

export function limesToCut(wedgesNeeded, limes) {
  let counter = 0;
  let status = 0;
  while (wedgesNeeded && status <= wedgesNeeded && limes.length) {
    let current = limes.shift();
    switch (current) {
      case 'small':
        status += 6;
        break;
      case 'medium':
        status += 8;
        break;
      case 'large':
        status += 10;
        break;
      default:
    break;
    }
    counter++;
  }
  return counter;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length) {
    let currentOrder = orders.shift();
    let timeNeeded = timeToMixJuice(currentOrder);
    timeLeft -= timeNeeded;
  }
    return orders;
}
