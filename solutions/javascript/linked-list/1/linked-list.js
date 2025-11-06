export class LinkedList {
  constructor() {
    this.list = new Array();
  }
  push(element) {
    this.list.push(element);
  }

  pop() {
    const element = this.list.pop();
    return element;
  }

  shift() {
    const element = this.list.shift();
    return element;
  }

  unshift(element) {
    this.list.unshift(element);
  }

  delete(element) {
    const index = this.list.indexOf(element);
    if (index >= 0)
      this.list.splice(index, 1);
  }

  count() {
    return this.list.length;
  }
}
