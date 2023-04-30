import { StackUsingLinkedList } from './stack-linked-list.js'


const stack = new StackUsingLinkedList()
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.pop();
console.log(stack);