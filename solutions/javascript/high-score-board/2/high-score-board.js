export const createScoreBoard = () => ({ 'The Best Ever': 1000000 });
export const addPlayer = (sb, p, s) => (sb[p] = s, sb)
export const removePlayer = (s, p) => (delete s[p], s);
export const updateScore = (s, pl, pt) => (s[pl] += s.hasOwnProperty(pl) ? pt: 0, s);
export const applyMondayBonus = (sb) => (Object.keys(sb).forEach(k => sb[k] += 100), sb);
