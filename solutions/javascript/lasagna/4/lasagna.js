const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
 let remaining = -1;
 try {
  remaining = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
 } catch (err) {
  console.log("Error happened ", err);
 }
 return remaining;
}

export function preparationTimeInMinutes(numberOfLayers) {
 let preparationTime = 0;
 try {
  preparationTime = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
 }
 catch (err) {
  console.log(err)
 }
 return preparationTime;
}

export const totalTimeInMinutes = (n, a) => a + preparationTimeInMinutes(n);
console.log(totalTimeInMinutes(1,5));
