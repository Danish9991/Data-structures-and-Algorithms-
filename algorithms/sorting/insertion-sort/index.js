import {InsertionSort} from './insertion-sort.js'

const unsortedArray = [5, 2, 8, 1, 3];

const insertionSort = new InsertionSort(unsortedArray);

console.log(insertionSort.sort());