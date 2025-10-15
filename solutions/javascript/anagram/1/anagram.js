export const findAnagrams = (word, candidates) => {
  const result = [];
  for (let i = 0; i < candidates.length; i++) {
    if (isAnagram(word, candidates[i]))
      result.push(candidates[i]);
  }
  return result;
};

const isAnagram = (word, candidate) => {
  if (word.toLowerCase() === candidate.toLowerCase())
    return false;
  return word.toLowerCase().split('').sort().join('') === candidate.toLowerCase().split('').sort().join('');
}
