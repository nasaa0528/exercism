export function createAppointment(days, now = undefined) {
  now = now ? new Date(now) : new Date();
  now.setDate(now.getDate() + days); 
  return now;
}

export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

export function getAppointmentDetails(timestamp) {

  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  }
}

export function updateAppointment(timestamp, options) {
  let date = new Date(timestamp);
  if (options.year !== undefined) {
    date.setFullYear(options.year);
  }
  if (options.month !== undefined) {
    date.setMonth(options.month);
  }
  if (options.date !== undefined) {
    date.setDate(options.date);
  }
  if (options.hour !== undefined) {
    date.setHours(options.hour);
  }
  if (options.minute !== undefined) {
    date.setMinutes(options.minute);
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}

export function timeBetween(timestampA, timestampB) {
  let difference = Math.ceil(Math.abs(Date.parse(timestampA)/1000 - Date.parse(timestampB)/1000));
  return difference;
}

export function isValid(appointmentTimestamp, currentTimestamp) {
  return Date.parse(appointmentTimestamp) - Date.parse(currentTimestamp) > 0 ? true : false;
}
