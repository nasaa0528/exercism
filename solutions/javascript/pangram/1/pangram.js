export const isPangram = (sentence) => {
  return (new Set(sentence.toLowerCase().replace(/[^a-zA-Z]/g, "").split("")).size === 26) ? true : false;
};
