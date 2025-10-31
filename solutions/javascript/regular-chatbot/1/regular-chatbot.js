export const isValidCommand = c => /^chatbot/i.test(c);
export const removeEmoji = m => m.replace(/emoji\d+/gi, '');
export const checkPhoneNumber = n => /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/.test(n) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${n}`;
export const getURL = uInp => uInp.match(/[a-zA-Z0-9]+\.[a-zA-Z0-9]+/gi);
export const niceToMeetYou = n => 'Nice to meet you, ' + n.replace(/(\w+),\s(\w+)/, '$2 $1');
