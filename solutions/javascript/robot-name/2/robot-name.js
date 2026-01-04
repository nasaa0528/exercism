const ALPHABET = [..."QXJKBMVFZLWDHRPGNCUAYTOIES"];
const DIGITS = [..."1357902468"];

const ROBOT_NAMES = ALPHABET.flatMap((l1) =>
  ALPHABET.flatMap((l2) =>
    DIGITS.flatMap((d1) =>
      DIGITS.flatMap((d2) =>
        DIGITS.flatMap((d3) => `${l1}${l2}${d1}${d2}${d3}`),
      ),
    ),
  ),
);

const ROBOT_NAMES_COUNT = ROBOT_NAMES.length;
let currentRobotName = 0;

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  reset() {
    if (currentRobotName >= ROBOT_NAMES_COUNT)
      throw new RangeError("No name remaining!");

    this._name = ROBOT_NAMES[currentRobotName++];
  }
}

Robot.releaseNames = () => {};
