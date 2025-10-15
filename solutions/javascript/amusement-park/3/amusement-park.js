export const createVisitor = (name, age, ticketId) => ({name, age, ticketId});
export const revokeTicket = (v) => (v.ticketId = null, v);
export const ticketStatus = (t, tId) => (t.hasOwnProperty(tId) ? (t[tId] ? `sold to ${t[tId]}` : 'not sold') : 'unknown ticket id');
export const simpleTicketStatus = (t, tId) => t[tId] ?? 'invalid ticket !!!';
export const gtcVersion = (v) => v.gtc?.version;
