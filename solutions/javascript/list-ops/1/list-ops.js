export class List {
  values = [];
  len = 0;

  constructor(values = []) {
    this.values = values;
    while (this.values[this.len] !== undefined) {
      this.len++;
    }
  }

  append(appendList) {
    let newList = new List([...this.values]);

    for (let i = 0; i < appendList.len; i++) {
      newList.values[newList.len] = appendList.values[i];
      newList.len++;
    }
    return newList;
  }

  concat(concatList) {
    let newList = new List([...this.values]);

    for (const concatItem of concatList.values) {
      newList = newList.append(concatItem);
    }

    return newList;
  }

  filter(cb) {
    let newList = new List();
    for (const val of this.values) {
      if (cb(val)) {
        newList.values[newList.len] = val;
        newList.len++;
      }
    }

    return newList;
  }

  map(cb) {
    const newList = new List([...this.values]);
    for (let i = 0; i < newList.length(); i++) {
      newList.values[i] = cb(this.values[i]);
    }

    return newList;
  }

  length() {
    return this.len;
  }

  foldl(cb, acc) {
    for (const val of this.values) {
      acc = cb(acc, val);
    }
    return acc;
  }

  foldr(cb, acc) {
    for (let i = this.length() - 1; i >= 0; i--) {
      acc = cb(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const newList = new List([...this.values]);
    for (let i = 0; i < newList.length() / 2; i++) {
      [newList.values[i], newList.values[newList.length() - i - 1]] = [
        newList.values[newList.length() - i - 1],
        newList.values[i],
      ];
    }

    return newList;
  }
}
