export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(list) {
    return list.foldl((acc, el) => acc.append(el), this);
  }

  filter(cb) {
    return new List(this.foldl((acc, el) => (cb(el) ? [...acc, el] : acc), []));
  }

  map(cb) {
    return new List(this.foldl((acc, el) => [...acc, cb(el)], []));
  }

  length() {
    return this.foldl((i) => i + 1, 0);
  }

  foldl(callback, initialValue, values) {
    const [head, ...tail] = values || this.values;
    return head
      ? this.foldl(callback, callback(initialValue, head), tail)
      : initialValue;
  }

  foldr(callback, initialValue) {
    return this.reverse().foldl(callback, initialValue);
  }

  reverse() {
    return new List(this.foldl((acc, el) => [el, ...acc], []));
  }
}
