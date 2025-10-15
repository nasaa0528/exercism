export const dayRate = (rph) => 8 * rph;

export const daysInBudget = (b, rph) => Math.floor(b / (rph * 8));

export const priceWithMonthlyDiscount = (rph, nd, d) => (d > 0)
  ? Math.ceil(8 * rph * ((nd - nd % 22) * (1 - d) + nd % 22))
  : Math.ceil(8 * rph * nd);
