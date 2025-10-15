export const transform = (scores) => {
  let result = {};
  for (const item in scores)
    for (const letter of scores[item])
      result[`${letter.toLowerCase()}`] = parseInt(item);
  return result;
};
