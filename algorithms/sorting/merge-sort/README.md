# Merge sort

Merge sort is a divide-and-conquer sorting algorithm that works by recursively splitting the input array into smaller subarrays, sorting them individually, and then merging them back together to obtain the final sorted array. It divides the problem into smaller subproblems, solves them independently, and combines the solutions to achieve the sorted result.

![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/algorithms/sorting/merge-sort/assets/merge-one.gif)

A recursive merge sort algorithm used to sort an array of 7 integer values. These are the steps a human would take to emulate merge sort (top-down).

![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/algorithms/sorting/merge-sort/assets/merge-two.svg)
---

# Complexity

| Best        | Average       | Worst         | Memory        | Stable   | 
|:-----------:|:-------------:|:-------------:|:-------------:|:---------|
| O(log(n))   | O(log(n))     | O(log(n))     | O(n)          |yes       |