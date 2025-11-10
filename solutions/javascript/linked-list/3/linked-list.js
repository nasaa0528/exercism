class Node {
  constructor({value, previous, next} = {value: '', previous:null, next:null}) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class NullNode extends Node { }

export class LinkedList {
  constructor() {
    this._head = this._tail = new NullNode();
    this._head.next = this._tail;
    this._tail.previous = this._head;
  }

  get firstNode() { return this._head.next }
  get lastNode() { return this._tail.previous }

  remove(node) {
    node.previous.next = node.next;
    node.next.previous = node.previous;
    return node.value;
  }

  insertBetween(value, nodeBefore, nodeAfter) {
    const newNode = new Node({value, previous: nodeBefore, next: nodeAfter});
    nodeBefore.next = newNode;
    nodeAfter.previous = newNode;
  }

  push(value) {
    this.insertBetween(value, this.lastNode, this._tail);
  }

  pop() {
    return this.remove(this.lastNode);
  }

  shift() {
    return this.remove(this.firstNode);
  }

  unshift(value) {
    this.insertBetween(value, this._head, this.firstNode);
  }

  delete(value) {
    let node = this.firstNode;
    while (!(node instanceof NullNode) && node.value !== value) 
      node = node.next;

    if (node instanceof NullNode)
      return;

    this.remove(node);
  }

  count() {
    let nb = 0;
    let node = this.firstNode;
    while(!(node instanceof NullNode)) {
      nb++;
      node = node.next;
    }
    return nb;
  }
}
