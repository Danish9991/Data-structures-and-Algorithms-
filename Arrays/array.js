/**
 * MyArray class has the operations of array
 * e.g push, pop, get, insert, shift
 */

class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  /**
   * get method return the array element of given index
   * @param {*} index
   */

  get(index) {
    return this.data[index];
  }

  /**
   * push method inserts the element in the last of array
   * @param {*} element
   */

  push(element) {
    this.data[this.length] = element;
    this.length++;
  }

  /**
   * pop method removes the last element of an array
   */

  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }

  /**
   * shift method removes the element at specific index and shifts the adjecent elements to left
   * @param {*} index
   */

  shift(index) {
    if (index > this.length) {
      return "index not found";
    }

    this.shiftElement(index);
  }

  /**
   * shiftElement method shifts the element of an array to left
   * @param {*} index
   */

  shiftElement(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  /**
   * insert method inserts the element at specific location and shifts the remaining elements of array towards right
   * @param {*} index
   * @param {*} element
   */

  insert(index, element) {
    //check if the index is greater than length of array, it pushes the element at end of an array
    if (index >= this.length) {
      this.push(element);
      return;
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = element;
    this.length++;
  }
}

//instantiation
const newArray = new MyArray();
newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
console.log("get =>", newArray.get(2));
newArray.insert(2, 25);
newArray.shift(2);
newArray.pop();
console.log(newArray);
