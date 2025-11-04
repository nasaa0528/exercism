export const hey = (message) => {
  message = message.trim();
  if (message.endsWith('?') && /^[A-Z]+$/.test(message.replaceAll(/[^a-zA-Z]+/g, ''))) {
    return 'Calm down, I know what I\'m doing!'
  }

  if (/^[A-Z]+$/.test(message.replaceAll(/[^a-zA-Z]+/g, ''))) {
    return 'Whoa, chill out!';
  }

  if (message.endsWith('?')) {
    return 'Sure.';
  }

  if (message.replaceAll(/\s/g, '') === '') {
    return 'Fine. Be that way!';
  }

  return 'Whatever.';

};
