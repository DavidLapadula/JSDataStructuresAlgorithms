/**Intro */

// Very important for large data sets


/**Issues with sort() */

// converts to string before being sorted and uses character code at first index. Converted unicode is then used to sort
// Implementation and browser differences mean time and space complexity not guaranteed 
// sort() will take callback to customize how the function works on the input 

const basket = [2, 43, 5, 6, 78, 3, 4, 0];
console.log(basket.sort());

/** Common Algorithms */
// Time and Space complexity tradeoffs between algorithms

/** Bubble Sort */

// Elementary sort: comes from idea of largest value bubbling up
// Simple but not efficient
// O(n^2) worst case time complexity because nested loops, and O(1) space complexitty because not making any new items


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

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

console.log(bubbleSort(numbers));