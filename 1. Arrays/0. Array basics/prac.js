const ourData = new Map();

ourData
  .set(1, "Web development")
  .set(2, "Cyber security")
  .set(3, "Cloud Computing")
  .set(4, "Machine Learning");
// console.log(ourData);

const hasKey = ourData.has(5);
// console.log(hasKey);

const keys = ourData.keys();
// console.log("Keys", keys);

const values = ourData.values();
// console.log("Values", values);

const size = ourData.size;
// console.log(size);
// console.log(ourData.delete(4));
// console.log(ourData);

const entries = ourData.entries();
// console.log(entries);

console.log(ourData.get(1));
