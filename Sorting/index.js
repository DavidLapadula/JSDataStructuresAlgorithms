/**Intro */

// Very important for large data sets
// Sort is stable if values that have the same sort key stay in the same order after sorting. Important because can then stack sorts by multiple values


/**Issues with sort() */

// converts to string before being sorted and uses character code at first index. Converted unicode is then used to sort
// Implementation and browser differences mean time and space complexity not guaranteed 
// sort() will take callback to customize how the function works on the input 

const basket = [2, 43, 5, 6, 78, 3, 4, 0];
basket.sort();

/** Common Algorithms */
// Time and Space complexity tradeoffs between algorithms

/** Bubble Sort */

// Elementary sort: comes from idea of largest value bubbling up
// Simple but not efficient
// O(n^2) worst case time complexity because nested loops, and O(1) space complexity because not making any new items


const numbersForBubble = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;

    if (length === 1) {
        return array;
    }

    // O(n^2) because nested loops. For every item, loop the whole array and bubble the biggest numbers to the end
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {

                // Swap to the right when the numbers are bigger
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

/**Selection Sort */

// Scan for smallest and swap for item in first position
// Better because each inner for loop ignores values already set at the beginning

const numbersForSelection = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        // current index of outer loop is the default min
        let min = i;
        let temp = array[i];

        // start inner loop at i + 1 because first index will always be smallest
        // inner loop is going to set the smallest item
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) { // array[j] is going to be the item AFTER array[min] because min = i and j = i + 1
                min = j;
            }
        }

        array[i] = array[min]; // i is going to be the first 'non-set' index
        array[min] = temp; // took min out to put in first index, replace with previous first index
    }

    return array;
}

/**Insertion Sort */

// Useful when list is near sorted O(n) best case, so use when ALMOST or COMPLETELY sorted

const numbersForInsertion = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // splice() to remove element at desired index, returns array so need to get 0th element
            // unshift() puts it at the beginning
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // Do not run inner loop unless item is SMALLER than item to the left.
            // Optimizes sort because numbers that do not need to be sorted are left in place
            if (array[i] < array[i - 1]) {
                // start j at 1 because first index always caught in 'if' block
                // only need to run loop to i because that is the item being placed
                for (var j = 1; j < i; j++) {
                    // find where smaller item should go, and add it using third argument of splice()
                    if (array[i] >= array[j - 1] && array[i] < array[j]) {
                        array.splice(j, 0, array.splice(i, 1)[0]);
                    }
                }
            }
        }

    }
}

/** Merge Sort */

// O (n log n), used divide and conquer technique
// Still n because need to check every item, and then log n becaus recursively working through tree
// Best, AVG, and worst case are (n log(n)) so very effective BUT tradeoff because O(n) space

const numbersForMerge = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    const length = array.length;

    if (length === 1) {
        return array
    }
    // Split Array in into right and left
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


/** Quick Sort */

// Divide and conquer, so log n
// Pick pivot and put all numbers smaller to its left and larger to its right
// Continue this for either side of the list
// Worst case caan be quadratic if pick a bad pivot and need to go over the whole list. Fastest ON AVG
// But space complexity is much better at log n

const numbersForQuick = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// left and right should be first and last index so can pick the pivot. First less than last then does not need to be swapped
function quickSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
     
function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}
  
function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
}

/**Non comparison sorts */

// Comparison requires (n log(n)) as best time, so if do not compare
// Non-comparison sorts use how nunbers are stored in binary. ONLY works with integers





