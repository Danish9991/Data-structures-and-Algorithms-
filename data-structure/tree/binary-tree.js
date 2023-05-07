/**
 * Node class is an instance of tree node with a property of value and pointer to left and right location to null
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * BinaryTree is class in which we perform operations of tree
 */

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }

  /**
   * insert method adds the node in binary tree depends upon the value property of the node
   * if node value is less than root value is it traversed or adds to the left and vice versa
   * Time Complexity O(log(n))
   * Space complexity O(n)
   * @param {*} value
   * @returns
   */

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /**
   * lookup methods search the node value in the binary tree depends upon the value of root to search in left or right of the tree
   * Time Complexity O(log(n))
   * Space Complexity O(n)
   * @param {*} value
   * @returns
   */

  lookup(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove() {}
}

const tree = new BinarySearchTree()
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(20));

  /**
   * traverse method is used to show the binary tree in the console
   * @param {*} node
   * @returns
   */
 const traverse = (node) => {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  };

console.log(traverse(tree.root))