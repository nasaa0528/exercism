export const convert = (num) => {
  let result = "";
  num = parseInt(num);
  result += (num % 3 === 0) ? "Pling" : "";
  result += (num % 5 === 0) ? "Plang" : "";
  result += (num % 7 === 0) ? "Plong" : "";
  return (result) ? result : num.toString();
};
