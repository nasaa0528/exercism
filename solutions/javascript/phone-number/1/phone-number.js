export const clean = (number) => {
  number = number.replace(/(-|\s|\(|\)|\.|\+)/g, "");
  if (number.length > 11)
    throw new Error("More than 11 digits");
  if (number.length < 10)
    throw new Error("Incorrect number of digits");
  if (number.match(/[a-zA-Z]/))
    throw new Error("Letters not permitted");
  if (number.match(/[?!,:;]/))
    throw new Error("Punctuations not permitted");
  if (number.length === 11 && number[0] !== '1')
    throw new Error("11 digits must start with 1");
  number = (number.length === 11) ? number.slice(1) : number;
  if (number[0] === "0")
    throw new Error("Area code cannot start with zero");
  if (number[0] === "1")
    throw new Error("Area code cannot start with one");
  if(number[3] === "0")
    throw new Error("Exchange code cannot start with zero");
  if(number[3] === "1")
    throw new Error("Exchange code cannot start with one");

  return number;
};
