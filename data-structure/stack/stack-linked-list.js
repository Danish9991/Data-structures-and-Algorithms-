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
 * StackUsingLinkedList class has the methods of stack i.e push, pop, peek
 */

export class StackUsingLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * peek method return the TOS node value
   * Time Complexity O(1)
   * @returns
   */

  peek() {
    return this.top.value;
  }

  /**
   * push method inserts the node at the TOS
   * Time Complexity O(1)
   * @param {*} value
   * @returns
   */

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdinPointer = this.top;
      this.top = newNode;
      this.top.next = holdinPointer;
    }
    this.length++;
    return this;
  }

  /**
   * pop method remove the element on the TOS
   * Time Complexity O(1)
   * @returns
   */

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
}
