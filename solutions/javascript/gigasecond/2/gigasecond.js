const gigaSecond = 10**12;
export const gigasecond = (now) => {
  return new Date(now.getTime() + gigaSecond);
};
