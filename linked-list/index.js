import { SinglyLinkedList } from "./singlyLinked-list.js";
import { DoublyLinkedList } from "./doublyLinked-list.js";

// ------------- Singly linked list ----------------
const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.insert(6, 17);
myLinkedList.remove(0);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList);
console.log(myLinkedList.printList());

// ------------- doubly linked list ----------------
const doublyList = new DoublyLinkedList(10);
doublyList.append(20);
doublyList.prepend(5);
doublyList.insert(3, 15);
doublyList.remove(3);
console.log(doublyList);
console.log(doublyList.printList());
