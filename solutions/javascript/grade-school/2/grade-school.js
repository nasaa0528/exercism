export class GradeSchool {
  #_roster = {};

  roster() {
    return Object.values(this.#_roster).flat();
  }

  add(name, grade) {
    for (const [k,v] of Object.entries(this.#_roster)) {
      if (v.includes(name)) {
        return false;
      }
    }

    (this.#_roster[grade] = this.#_roster[grade] || []).push(name);
    this.#_roster[grade].sort();

    return true;
  }

  grade(selectGrade) {
    return this.#_roster[selectGrade] || [];
  }
}
