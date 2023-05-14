/**
 * BubbleSort class performs sorting of array through bubble sort technique
 */

export class BubbleSort {
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
    if (this.arr.length < 2) {
      return this.arr;
    }

    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < this.arr.length - i; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }

    return this.arr;
  }
}
