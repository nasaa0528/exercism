export const canExecuteFastAttack = (k) => !k;
export const canSpy = (k, a, p) => k || a || p;
export const canSignalPrisoner = (a, p) => p && !a;
export const canFreePrisoner = (k, a, p, d) => ((!a && d) || (!a && !k && p));
