const config = {
  teenth: 13,
  first: 1,
  second: 8,
  third: 15,
  fourth: 22,
}
const workdays = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}
export const meetup = (year, month, day, workday) => {
  let initDay;
  if (day !== 'last') {
    initDay = new Date(year, month-1, config[day]);
    while(initDay.getDay() !== workdays[workday])
      initDay.setDate(initDay.getDate() + 1);
  } else {
    initDay = new Date(year, month, 0);
    while(initDay.getDay() !== workdays[workday])
      initDay.setDate(initDay.getDate() - 1);
  }
  return initDay;
};
