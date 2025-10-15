export const dayRate = (rph) => 8 * rph;

export const daysInBudget = (b, rph) => Math.floor(b / (rph * 8));

export const priceWithMonthlyDiscount = (rph, nd, d) => (d > 0)
  ? Math.ceil(
      dayRate((1 - d) * rph) * Math.floor(nd / 22) * 22 + dayRate(rph) * (nd % 22)
  )
  : Math.ceil(dayRate(rph) * nd);
