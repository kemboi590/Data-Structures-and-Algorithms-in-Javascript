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
    return this.items.length === 0; // true or false
  }

  //size
  size() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.items.length;
  }

  //pop
  pop() {
    if (this.isEmpty()) {
      return "The stack is empty";
    }
    return this.items.pop();
  }

  //peek
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.items[this.items.length - 1];
  }

  //printStack
  printStack() {
    let str = " ";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
console.log("size: ", stack.size());
console.log("Item removed: ", stack.pop());
console.log("New top element: ", stack.peek());
console.log(stack.printStack());
console.log("size: ", stack.size());
