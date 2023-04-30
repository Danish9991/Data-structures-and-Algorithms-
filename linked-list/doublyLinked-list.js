/**
 * Node class is an instance of linked list node with a property of value and pointer to  next, prev location to null
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * DoublyLinkedList class performs the operation of singly linked list
 */

export class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * append method appends the linked list node to end of the list
   * Time Complexity - O(1)
   * @param {*} value
   * @returns
   */

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * prepend method attached the linked list node at the beginning of the list
   * Time Complexity O(1)
   * @param {*} value
   * @returns
   */

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * printList method pushes the linked lists value in an array and returns that array
   * Time Complexity 0(n)
   * @returns
   */

  printList() {
    const printList = [];
    let currentNode = this.head;
    while (currentNode) {
      printList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return printList;
  }

  /**
   * insert method inserts the linked list at the given index, if index is greater than length of linked list is appends at the end
   * if index is 0 it prepends the linked list at the beginning
   * Time Complexity O(n)
   * @param {*} index
   * @param {*} value
   * @returns
   */

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingNode;
    holdingNode.prev = newNode;
    this.length++;
    return this;
  }

  /**
   * remove method removes the node from linked list at given index.
   * Time Complexity 0(n)
   * @param {*} index
   * @returns
   */

  remove(index) {
    if (index === 0) {
      return (this.head = this.head.next);
    }
    const leader = this.traverseToIndex(index - 1);
    const unWanterNode = leader.next;
    let follower = unWanterNode.next;
    leader.next = follower;
    //if the node is not last node i.e follower will be null only if we given the last index
    if (follower !== null) follower.prev = leader;
    this.length--;
    return this;
  }

  /**
   * traverseToIndex method traverse to linked list untill index - 1 and returns that node
   * Time complexity O(n)
   * @param {*} index
   * @returns
   */

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
