export const dayRate = (r) => 8 * r;
export const daysInBudget = (b, r) => Math.floor(b / (r * 8));

export const priceWithMonthlyDiscount = (r, nd, d) =>
  Math.ceil(
    dayRate(r) * (Math.floor(nd / 22) * 22 * (1 - d) + nd % 22)
  );
