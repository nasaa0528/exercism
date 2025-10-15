const PREP_MIN_PER_L = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = (a) => EXPECTED_MINUTES_IN_OVEN - a;
export const preparationTimeInMinutes = (n) => n * PREP_MIN_PER_L;
export const totalTimeInMinutes = (n,a) => a + preparationTimeInMinutes(n);
