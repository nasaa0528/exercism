export class GradeSchool {
  #_roster = {};

  roster = () => Object.values(this.#_roster).flat();

  add = (n,g) => {
    if (!Object.values(this.#_roster).flat().includes(n)) {
      (this.#_roster[g] = this.#_roster[g] || []).push(n);
      this.#_roster[g].sort();

      return true;
    }

    return false;
  }

  grade = (s) => this.#_roster[s] || [];
}
