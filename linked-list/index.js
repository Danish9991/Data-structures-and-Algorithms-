import { SinglyLinkedList } from './singlyLinked-list.js'

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(5);
myLinkedList.insert(6, 17);
myLinkedList.remove(0);
console.log(myLinkedList);
console.log(myLinkedList.printList());