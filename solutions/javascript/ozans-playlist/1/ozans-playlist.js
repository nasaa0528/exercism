export const removeDuplicates = p => Array.from(new Set(p));
export const hasTrack = (p, t) => p.includes(t);
export const addTrack = (p, t) => Array.from(new Set(p).add(t));
export const listArtists = p => Array.from(new Set(p.map(i => i.split(' - ')[1])));
export const deleteTrack = (playlist, track) => {
  let set = new Set(playlist);
  set.delete(track);
  return Array.from(set);
}

