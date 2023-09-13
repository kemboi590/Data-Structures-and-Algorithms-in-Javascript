const MONDAY = new Map();
MONDAY.set(6, "wake up");
MONDAY.set(8, "Go to library");
MONDAY.set(12, "Take lunch");
MONDAY.set(4, "Have a rest");
// console.log(MONDAY)

const noon = MONDAY.get(12);
// console.log(noon)

const test = new Map();
test.set(1, "wake").set(2, "go work").set(3, "sleep");
// console.log(test);

const contains = test.has("sleep");
// console.log(contains);

const testSize = test.size;
// console.log(testSize);
// console.log(test.delete(3));
// console.log(testSize);

const all = test.entries();
// console.log(all);
let value1 = all.next().value;
// console.log(value1);

let value2 = all.next().value;
// console.log(value2);
let value3 = all.next().value;
// console.log(value2);

let testKeys = test.keys();
console.log(testKeys);
