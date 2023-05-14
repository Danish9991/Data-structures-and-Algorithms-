/**
 * SelectionSort class performs sorting of array through Selection sort technique
 */
export class SelectionSort {
    constructor(array){
        this.arr = array;
    }

    sort(){
        if(this.arr.length < 2){
            return this.arr;
        }

        for(let i = 0; i < this.arr.length; i++){
            let minIndex = i;
            for(let j = i + 1; j < this.arr.length; j++){
                if(this.arr[j] < this.arr[minIndex]){
                    minIndex = j;
                }
            }

            if(minIndex !== i){
                const temp = this.arr[i];
                this.arr[i] = this.arr[minIndex];
                this.arr[minIndex] = temp
            }
        }

        return this.arr;
    }
}