/**
 * QueueUsingArray class implements the opertions of queue using array
 */
export class QueueUsingArray {
  constructor() {
    this.array = [];
  }

  /**
   * enQueue method push the element
   * Time Complexity O(1)
   * @param {*} value
   */

  enQueue(value) {
    this.array.push(value);
  }

  /**
   * deQueue removes the element from array at the beginning
   * Time Complexity O(1)
   * @returns
   */

  deQueue() {
    if (this.isEmpty()) {
      return "underflow";
    }

    return this.array.shift();
  }

  /**
   * peek method returns the first element of an array
   * Time Complexity 0(1)
   * @returns
   */

  peek() {
    return this.array[0];
  }

  /**
   * size method return the size of the queue
   * Time Complexity O(1)
   * @returns
   */

  size() {
    return this.array.length;
  }

  /**
   * isEmpty method return true, flase depends upon the length of the queue
   * Time Complexity O(1)
   * @returns
   */

  isEmpty() {
    return this.array.length === 0;
  }

  /**
   * clear method clears the queue
   * Time Complexity O(1)
   */

  clear() {
    this.array = [];
  }
}
