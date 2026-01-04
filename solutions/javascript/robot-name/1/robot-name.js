export class Robot {
  allNames = [];
  index = 0;
  MAX_NAMES = 26 * 26 * 1000;
  #name = "";

  constructor() {
    this.generateNames();
    this.#name = this.next();
  }

  generateNames() {
    for (let a = 65; a <= 90; a++) {
      for (let b = 65; b <= 90; b++) {
        for (let i = 0; i < 1000; i++) {
          this.allNames.push(
            String.fromCharCode(a) +
              String.fromCharCode(b) +
              i.toString().padStart(3, "0"),
          );
        }
      }
    }

    for (let i = this.allNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.allNames[i], this.allNames[j]] = [
        this.allNames[j],
        this.allNames[i],
      ];
    }
  }

  set name(val = undefined) {
    throw Error({ message: "name cannot be modified" });
  }

  get name() {
    return this.#name;
  }

  next() {
    return this.index >= this.MAX_NAMES ? null : this.allNames[this.index++];
  }

  reset() {
    this.#name = this.next();
  }
}

Robot.releaseNames = () => {};
