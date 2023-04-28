import { MyArray } from "./array.js";
export { MyArray };

//instantiation
const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
console.log("get =>", newArray.get(2));
newArray.insert(2, 25);
newArray.shift(2);
newArray.pop();
console.log(newArray);
