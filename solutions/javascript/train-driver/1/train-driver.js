export function getListOfWagons(...ids) {
  return ids;
}

export function fixListOfWagons(ids) {
  const [f, s, ...rest] = ids;
  return [...rest, f, s];
}

export function correctListOfWagons(ids, missingWagons) {
  const [f, ...rest] = ids;
  return [f, ...missingWagons, ...rest];
}

export function extendRouteInformation(information, additional) {
  return {
    ...information,
    ...additional
  };
}

export function separateTimeOfArrival(information) {
  const {timeOfArrival, ...rest} = information;
  return [timeOfArrival, rest];
}
