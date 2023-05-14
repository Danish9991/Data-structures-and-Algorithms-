/**
 * InsertionSort class performs sorting of array through Insertion sort technique
 */
export class InsertionSort {
  constructor(array) {
    this.arr = array;
  }
  /**
   * sort method returns the sorted list
   * Time-Complexity 0(n^2)
   * Space-Complexity O(1)
   * @returns
   */

  sort() {
    const length = this.arr.length;

    if (length < 2) {
      return this.arr;
    }

    for (let i = 1; i < length; i++) {
      const current = this.arr[i];
      let j = i - 1;

      // Move elements greater than current to the right
      while (j >= 0 && this.arr[j] > current) {
        this.arr[j + 1] = this.arr[j];
        j--;
      }

      // Insert the current element at its correct position
      this.arr[j + 1] = current;
    }

    return this.arr;
  }
}
