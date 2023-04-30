/**
 * StackUsingArray class performs the stack operation
 */
export class StackUsingArray {
    constructor(){
        this.array = [];
    }

   /**
   * peek method return the last element of an array
   * Time Complexity O(1)
   * @returns
   */

    peek(){
        return this.array[this.length-1]
    }

    /**
     * push method inserts the element at last
     * Time Complexity O(1)
     * @param {*} value 
     */

    push(value){
        this.array.push(value)
    }

    /**
     * pop element removes the last element of an array
     * Time Complexity O(1)
     */

    pop(){
        this.array.pop()
    }
    
}