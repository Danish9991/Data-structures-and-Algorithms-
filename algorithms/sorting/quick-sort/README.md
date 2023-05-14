# Qucik sort
Quick sort is another efficient divide-and-conquer sorting algorithm that works by partitioning the array into two subarrays based on a chosen pivot element, and then recursively sorting the subarrays. The algorithm repeatedly selects a pivot, places it in its correct position, and partitions the array around it. This process is performed until the entire array is sorted.

![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/algorithms/sorting/quick-sort/assets/quick.gif)
---

# Complexity

| Best        | Average       | Worst         | Memory        | Stable   | 
|:-----------:|:-------------:|:-------------:|:-------------:|:---------|
| O(n log(n)) | O(n log(n))   | O(n^2)        | O(log(n))     |yes       |

note : O(n^2) is only when the pivot is smallest and largest element in the list

# Difference between Merge and Qucik sort

Both merge sort and quick sort are efficient sorting algorithms based on the divide-and-conquer strategy, but they have some differences in terms of their approach and performance characteristics.

<h2>Approach: </h2>

<h3>Merge Sort:</h3> Merge sort divides the array into two halves, recursively sorts each half, and then merges the sorted halves to obtain the final sorted array. It guarantees a stable sort, meaning that elements with equal values maintain their relative order after sorting.

<h3>Quick Sort:</h3> Quick sort selects a pivot element, partitions the array into two subarrays based on the pivot, recursively sorts each subarray, and then combines the sorted subarrays. The partitioning step involves placing elements less than the pivot on one side and elements greater than the pivot on the other side.

<h2>Pivot Selection: </h2>

<h3>Merge Sort:</h3> Merge sort does not involve pivot selection since it always divides the array into equal halves.

<h3>Quick Sort:</h3> Quick sort relies on a chosen pivot element, which can significantly affect the algorithm's performance. Common pivot selection methods include choosing the first, last, or middle element, or using more advanced techniques like the median-of-three.

<h2>Performance:</h2>

<h2>Time Complexity:</h2>

<h3>Merge Sort:</h3> Merge sort has a time complexity of O(n log n) in the average, best, and worst cases. It consistently performs at this level, making it suitable for large datasets.

<h3>Quick Sort:</h3> Quick sort has an average time complexity of O(n log n), but its worst-case time complexity is O(n^2) if the pivot is consistently chosen poorly, leading to unbalanced partitions. However, by using randomized or median-based pivot selection, the chance of encountering the worst case is greatly reduced.

<h2>Space Complexity:</h2>

<h3>Merge Sort:</h3> Merge sort has a space complexity of O(n) since it requires additional space to merge the sorted subarrays into a new array.

<h3>Quick Sort:</h3> Quick sort has an in-place partitioning mechanism, so it usually requires less additional space. However, recursive calls consume space on the call stack, making the space complexity O(log n) in the average and best cases, and O(n) in the worst case.

<h2>Stability:</h2>

<h3>Merge Sort:</h3> Merge sort is a stable sorting algorithm, meaning that elements with equal values maintain their original relative order after sorting.

<h3>Quick Sort:</h3> Quick sort is not inherently stable since the partitioning step can change the relative order of equal elements. However, it can be modified to achieve stability by considering additional conditions during the partitioning step.

In summary, merge sort and quick sort are both efficient sorting algorithms. Merge sort guarantees stability and performs consistently well, but it requires additional space for merging. Quick sort has better average-case performance and uses less additional space, but it may suffer from the worst-case time complexity if the pivot selection is not optimized. Randomized or median-based pivot selection can help mitigate this issue.






