// Create a Stack function
let Stack = function () {
  this.count = 0;
  this.storage = {};

  // add value t the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // remove value from the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
