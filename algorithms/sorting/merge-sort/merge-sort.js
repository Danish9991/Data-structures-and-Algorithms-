/**
 * MergeSort class performs sorting of array through Merge sort technique
 */
export class MergeSort {
  sort(array) {
    const length = array.length;

    // Base case: return if the array has only one element
    if (length <= 1) {
      return array;
    }

    // Divide the array into two halves
    const mid = Math.floor(length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);

    // Recursively apply merge sort on each half
    const sortedLeft = this.sort(leftHalf);
    const sortedRight = this.sort(rightHalf);

    // Merge the sorted halves
    return this._mergeSort(sortedLeft, sortedRight);
  }

  /**
   * sort method return the sorted list
   * Time-Complexity O(n log(n))
   * Space-Complexity O(n)
   * @returns
   */
  _mergeSort(left, right) {
    const mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Append any remaining elements from left or right arrays
    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }

    return mergedArray;
  }
}
