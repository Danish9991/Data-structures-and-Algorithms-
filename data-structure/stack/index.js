import { StackUsingLinkedList } from './stack-linked-list.js';
import { StackUsingArray } from './stack-array.js'

// ================== StackUsingLinkedList ====================
const stack = new StackUsingLinkedList()
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.pop();
console.log(stack);

// ================== StackUsingArray ====================
const myStack = new StackUsingArray();
myStack.push(10);
myStack.push(89);
myStack.push(67);
myStack.pop();
myStack.peek();
console.log(myStack);