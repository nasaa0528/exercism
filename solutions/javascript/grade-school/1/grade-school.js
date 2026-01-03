export class GradeSchool {
  constructor() {
    this.expectedDB = Array.from({ length: 12 }, () => []);
  }

  roster() {
    return this.expectedDB.flat();
  }

  add(name, grade) {
    if (this.expectedDB.flat().includes(name)) {
      return false;
    }

    this.expectedDB[grade-1].push(name);
    this.expectedDB[grade-1].sort();
    return true;
  }

  grade(selectGrade) {
    return this.expectedDB[selectGrade - 1];
  }
}
