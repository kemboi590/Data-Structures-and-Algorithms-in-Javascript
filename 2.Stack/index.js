class Stack {
  constructor() {
    this.items = [];
  }

  //push
  push(element) {
    return this.items.push(element);
  }

  //isEmpty
  isEmpty() {
    return this.items.length === 0;
  }

  //peek
  peek() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  //size
  size() {
    return this.items.length;
  }

  //pop
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.items.pop();
  }

  //printStack
  printStack() {
    console.log(this.items)
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack() // 1,2,3
// console.log(stack.printStack()); // 1,2,3
console.log("size: ", stack.size());
console.log("top item to remove: ", stack.pop()); // 3
console.log("new Top is: ", stack.peek()); // 2
stack.printStack() // 1,2
// console.log(stack.printStack()); // 1,2
console.log("size: ", stack.size());
