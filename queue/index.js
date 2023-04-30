import { QueueUsingLinkedList } from "./queue-linked-list.js";

const queue = new QueueUsingLinkedList();
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.deQueue();
console.log(queue.peek());
console.log(queue);
