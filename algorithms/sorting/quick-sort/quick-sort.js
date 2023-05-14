export class QuickSort {
  sort(array) {
    // Base case: return if the array has only one element or is empty
    if (array.length <= 1) {
      return array;
    }

    // Choose the pivot element (last element)
    const pivot = array[array.length - 1];

    // Partition the array into two subarrays
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    // Recursively apply quick sort to the subarrays
    const sortedLeft = this.sort(left);
    const sortedRight = this.sort(right);

    // Concatenate the sorted subarrays with the pivot element in between
    return [...sortedLeft, pivot, ...sortedRight];
  }
}
