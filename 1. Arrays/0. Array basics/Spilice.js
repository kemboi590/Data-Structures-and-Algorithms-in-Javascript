let months = ["jan", "Mar", "Apr", "June"];

months.splice(1, 0, "Feb");
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// console.log(months)
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");
console.log(removed); //nothing removes []
console.log(myFish); //myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

const numbers = [1, 2, 3, 4, 5];
numbers.splice(numbers.length, 0, 6);
console.log(numbers); //[ 1, 2, 3, 4, 5, 6 ]

numbers.splice(3, 1); //remove one element at index 3
console.log(numbers);

numbers.splice(3, 1, 23);
console.log(numbers);

numbers.splice(0, 2); //removes [ 1, 2]
console.log(numbers); // [ 3, 23, 6 ]

numbers.splice(0, 2, 7, 8, 9); //removes 3, 23,
console.log(numbers); // [ 7, 8, 9, 6 ]

const num1 = [20, 21, 22, 23, 24, 25];
num1.splice(2, 2); //renoves [22, 23]
console.log(num1); //[ 20, 21, 24, 25 ]

const Fish = ["angel", "clown", "mandarin", "sturgeon"];
Fish.splice(-2, 1); // removes mandarin
console.log(Fish); //["angel", "clown", "sturgeon"]
Fish.splice(2); //removes all elements starting from index 2
console.log(Fish); // [ 'angel', 'clown' ]
