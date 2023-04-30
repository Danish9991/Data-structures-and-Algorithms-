import { QueueUsingLinkedList } from "./queue-linked-list.js";
import {QueueUsingArray} from './queue-array.js'

// =================== QueueUsingLinkedList ===================
const queue = new QueueUsingLinkedList();
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.deQueue();
console.log(queue.peek());
console.log(queue);

// =================== QueueUsingArray ===================

const myQueue = new QueueUsingArray();
myQueue.enQueue(10);
myQueue.enQueue(20);
myQueue.enQueue(30);
console.log(myQueue.peek());
myQueue.deQueue();
console.log(myQueue.peek());
console.log(myQueue);

