export const rotate = (word, rot) => {
  const replace = (char, rot, base=65) => (char - base + rot) % 26 + base;
  rot %= 26;

  if (!rot % 26)
    return word;

  const charCodeArr = [];
  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (/[A-Z]/.test(word[i])) {
      charCodeArr.push(replace(charCode, rot));
    } else if (/[a-z]/.test(word[i])) {
      charCodeArr.push(replace(charCode, rot, 97));
    } else {
      charCodeArr.push(charCode);
    }
  }
  return String.fromCharCode(...charCodeArr);
};
