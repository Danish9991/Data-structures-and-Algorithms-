/**
 * Node class is the instance of the node with value and next pointer property
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * QueueUsingLinkedList is a class which performs the operations of queue i.e enqueue, dequeue, peek
 */

export class QueueUsingLinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  /**
   * peek returns the first element which comes in the queue
   * @returns
   */

  peek() {
    return this.front.value;
  }

  /**
   * enQueue method inserts the node from the back/rare end of the queue
   * Time Complexity O(1)
   * @param {*} value
   * @returns
   */

  enQueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * deQueue method removes front element of the node
   * Time Complexity O(1)
   * @returns
   */

  deQueue() {
    if (this.front === null) {
      return null;
    }

    const holdingPointer = this.front;
    this.front = this.front.next;
    this.length--;
    return this;
  }
}
