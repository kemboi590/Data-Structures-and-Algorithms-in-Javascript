// create a node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//linkedList
class LinkedList {
  constructor() {
    this.head = null;
  }

  //add to first
  addToFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //add to last
  addToLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      newNode = this.head;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  //size of LinkedList
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  //InsertAt index
  InsertAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid Index");
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  //remove first node
  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  //remove last Node
  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  //remove at a given index
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  //print the whole lined list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();

linkedList.addToFirst(5);
linkedList.addToFirst(3);
linkedList.addToFirst(6);
linkedList.addToFirst(108);
linkedList.addToLast(12);
// linkedList.removeTop();
// linkedList.InsertAt(3, 8);
// linkedList.InsertAt(1, 9);
// linkedList.removeLast();
// linkedList.removeAt(2);

linkedList.print();

console.log("size = " + linkedList.size());
