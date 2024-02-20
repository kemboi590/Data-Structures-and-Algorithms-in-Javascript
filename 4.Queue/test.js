class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue
  enqueue(element) {
    this.items.push(element);
  }

  // dequeue
  dequeue() {
    if (this.isEmpty()) {
      return "Ther queue is empty";
    }
    return this.items.shift(); // removes an item from the front
  }

  // front
  front() {
    if (this.isEmpty()) {
      return "Ther queue is empty";
    }
    return this.items[0];
  }

  tail() {
    if (this.isEmpty()) {
      return "Ther queue is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty
  isEmpty() {
    return this.items.length === 0; // true or false
  }

  // size
  size() {
    if (this.isEmpty()) {
      return "Ther queue is empty";
    }
    return this.items.length;
  }

  // print
  printQueue() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.printQueue();
console.log("Size: ", queue.size());
console.log("Front item: ", queue.front());
console.log("The tail:", queue.tail());
console.log("Item removed is: ", queue.dequeue());
queue.printQueue();
console.log("The tail:", queue.tail());
console.log("Size: ", queue.size());
