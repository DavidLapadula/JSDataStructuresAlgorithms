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