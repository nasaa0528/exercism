export const gigasecond = (now) => {
  let inSeconds = now.getTime();
  inSeconds += 10**12;
  return new Date(inSeconds);
};
