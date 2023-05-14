import {SelectionSort} from './selection-sort.js'

const unsortedArray = [5, 2, 8, 1, 3];

const selectionSort = new SelectionSort(unsortedArray)

console.log(selectionSort.sort());