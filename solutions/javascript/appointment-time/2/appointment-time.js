export const createAppointment = (d, n = undefined) => (n = n ? new Date(n) : new Date(), n.setDate(n.getDate() + d), n);
export const getAppointmentTimestamp = a => a.toISOString();
export const getAppointmentDetails = t => (t = new Date(t), { year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hour: t.getHours(), minute: t.getMinutes()});
export const updateAppointment = (t, o) => (t = new Date(t),o.year !== undefined && t.setFullYear(o.year),o.month !== undefined && t.setMonth(o.month),o.date !== undefined && t.setDate(o.date),o.hour !== undefined && t.setHours(o.hour),o.minute !== undefined && t.setMinutes(o.minute),{year: t.getFullYear(), month: t.getMonth(), date: t.getDate(), hour: t.getHours(), minute: t.getMinutes()});
export const timeBetween = (a, b) => Math.ceil(Math.abs(Date.parse(a)/1000 - Date.parse(b)/1000));
export const isValid = (a, c) => Date.parse(a) - Date.parse(c) > 0 ? true: false;
