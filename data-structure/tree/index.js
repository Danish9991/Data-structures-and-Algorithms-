import { BinarySearchTree } from "./binary-tree.js";

const tree = new BinarySearchTree();
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

console.log(traverse(tree.root));
