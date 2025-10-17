const removeExtraChars = (sentence) => {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[^A-Za-z0-9']/g, ' ').trim();
  return sentence;
}

const convertNormalizedArray = (sentence) => {
  return sentence.split(/\s+/).map(word => word.replace(/^["|']?|["|']?$/g, ""));
}

export const countWords = (words) => {
  words = removeExtraChars(words);
  const wordArr = convertNormalizedArray(words);
  const uniqWords = new Set(wordArr);
  const result = {};

  uniqWords.forEach(item => {
    result[item] = wordArr.filter((word) => word === item).length;
  });

  return result;
};
