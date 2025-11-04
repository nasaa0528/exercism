export const hey = (m) => 
  ( m = m.trim().replace(/[^0-9a-zA-Z\?]/g, ''),
  (/^[A-Z]+\?$/.test(m)) ? 'Calm down, I know what I\'m doing!' :(m.endsWith('?') ? 'Sure.' : (/^(?=.*[A-Z])[A-Z0-9]+$/.test(m) ? 'Whoa, chill out!': (m=== '') ? 'Fine. Be that way!' : 'Whatever.')));
