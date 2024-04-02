const animals = ["ant", "bison", "camel", "duck", "elephant"];
//................. 0      1         2       3          4
//................. -5      -4       -3      -2         -1

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals.slice(-4, -1));
["bison", "camel", "duck"];

// When two parameters are passed,for example (-4,-1), it means -4 imclusive and -1 exclusive
// When one parameter is passed for example (-2) , it means -2 inclusive to the last element
