// Sequential organization in memory, making access easier and small footprint
// Best for iteration and acccss
// 32 bit system means 32 bits PER variable

const strings = ['a', 'b', 'c', 'd'];

// Push O(1)
strings.push('e'); 

// Pop O(1)
strings.pop(); 

// Unshift O(n) becuase need to shift indices
strings.unshift('z');

// Splice O(n)
strings.splice(2, 0, 'alien');

/**Static vs Dynamic Arrays */

// Fixed vs non fixed size. Dynamic works by copying and making in a new location and doubling the space
// In static arrays, append can be O(n) because need to copy elements to new array

/**Classes */

// Reference type: objects saved by reference to memory unless otherwise specified
// Context: where you are within object, value of 'this'. 'this' gets new value inside functions
// Instantiation: create new copy of an object, instances or multiple copies of an object. super() allows you to call constructor of parent and get access to member variables

/**Implementing an Array */

// JS array is object with integer keys but behaves like an array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; 
    }

    get(index) {
        return this.data[index]; 
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length; 
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]; // possible because array is object
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]; // shift all items to the left, item at the index is replaced
        }
        delete this.data[this.length - 1]; // could also just run the loop until less than OR EQUAL to length
        this.length--;
    }
}

/**Reverse a string */

// Strings are arrays of characters; treat like an array if asked a question

function reverse(str){
    if (!str || str.length < 2 || typeof str !== 'string'){
        return str;
    }

    const backwards = []; 
    const totalItems = str.length - 1; 

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(backwards.push(str[i])); 
    }
    return backwards.join();
}