# Tree

A tree is a widely used data structure in computer science that represents a hierarchical structure. It consists of a collection of nodes connected by edges. Each node in a tree can have zero or more child nodes, except for the root node, which has no parent.

Here are some key terms associated with trees:

- Node: Each element in a tree is called a node. A node represents a specific data element and can have a value associated with it.

- Root: The root node is the topmost node in a tree. It has no parent but can have child nodes.

- Parent and Child: Nodes in a tree are related to each other through parent-child relationships. A node that is connected to another node below it is called the parent node, and the connected node is its child.

- Sibling: Nodes that have the same parent are called siblings.

- Leaf: A leaf node is a node that has no child nodes.

- Edge: An edge is a connection between nodes in a tree. It represents a relationship between the nodes.

- Depth: The depth of a node in a tree is the number of edges from the root to that node.

- Height: The height of a tree is the maximum depth of any node in the tree. In other words, it is the length of the longest path from the root to a leaf node.

![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/data-structure/tree/images/tree.jpeg)

Trees have various applications in computer science, such as representing hierarchical data structures (e.g., file systems, organization structures), implementing search algorithms (e.g., binary search trees), organizing data for efficient retrieval (e.g., B-trees), and more.

There are different types of trees, including binary trees, binary search trees, AVL trees, red-black trees, B-trees, and many others. Each type has specific properties and is suitable for different use cases and operations.

# Binary search tree

A binary search tree (BST) is a type of binary tree that satisfies the binary search property. It is an ordered or sorted binary tree data structure where each node has a key or value associated with it, and the keys of all nodes in the left subtree are less than the key of the current node, while the keys of all nodes in the right subtree are greater than the key of the current node.

The binary search property allows for efficient searching, insertion, and deletion operations. It enables us to quickly find a specific key or perform range-based queries.

![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/data-structure/tree/images/binary-search-tree.jpg)

# Balanced vs Unbalanced Binary tree

A balanced binary tree is a binary tree where the difference in height between the left and right subtrees of any node is at most 1. A binary tree that is not balanced is called an unbalanced binary tree.

Here's an example of a balanced binary tree:

        4
      /   \
     2     6
    / \   / \
   1   3 5   7

In this example, the height of the left and right subtrees of each node differs by at most 1. The height of the entire tree is 2.

On the other hand, here's an example of an unbalanced binary tree:

        4
         \
          6
           \
            8
             \
              10

In this example, the left subtree of the root node has a height of 0, while the right subtree has a height of 4. This tree is unbalanced, which can result in slower search, insertion, and deletion operations in comparison to a balanced tree.

Balanced binary trees are desirable because they guarantee optimal time complexity for search, insertion, and deletion operations, while unbalanced binary trees can lead to worst-case time complexity of O(n) for these operations.


# Complexities
---

****Time Complexity****

| Access        | Search        | Insertion     | Deletion      | 
|:-------------:|:-------------:|:-------------:|:-------------:|
| O(log(n))     | O(log(n))     | O(log(n))     | O(log(n))     |

****Space Complexity****

O(n)