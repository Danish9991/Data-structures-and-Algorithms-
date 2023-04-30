import { HashTable } from "./hash-table.js";
export { HashTable };

//instantiation
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 100);
myHashTable.set("apples", 12);
myHashTable.set("mango", 24);
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
