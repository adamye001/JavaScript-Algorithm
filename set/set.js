let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add("some text");
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

// has method
const has = mySet.has(o);

// delete method
mySet.delete(5);

// print out values in the set (key and value are pairs)
for (let [key, value] of mySet.entries()) console.log(key, value);

// convert set to array
// const myArr = [...mySet];
const myArr = Array.from(mySet);

// conver array to set
const mySet2 = new Set([1, 2, 3, 4]);

// get the intersection
const intersection = new Set([...mySet].filter((x) => mySet2.has(x)));

// get the difference set
const difference = new Set([...mySet].filter((x) => !mySet2.has(x)));