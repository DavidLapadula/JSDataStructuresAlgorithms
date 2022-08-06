/** Intro */

// Key used as index in memory using a hash function. Hash function produces a key that acts as an index
// Different implementations: Maps can have ANY value as key and maintain insertion order. Objects are unordered and must have string as key
// Pros: Fast lookups (barring collisions), fast inserts, flexible keys
// Cons: Unordered, O(n) key iteration

/** Hash Function */

// Function that generates fixed length value for some input
// Hashes are one way - given output cannot get input
// Output will always be the same for same input (idempotent)
// Hash generated converted to address space
// Hashing can slow things down, extra overhead with adding/retrieving

/** Collisions */

// Insert, lookup, delete, search are all O(1)
// No shifting indices because data is unordered
// Nothing telling hash function to distribute data equally in memory
// Collision: address space used for multiple values (overflow), so stored as a linked list
// With a collision r/w operations turn into O(n/k) so just O(n)

/** Implement Hashtable */

// Use charChodeAt because letters represented as number in memory

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; // hashes are so fast they are considered O(1)
        }
        return hash; // return address space
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];  
        } 
        this.data[address].push([key, value]); // in case of collisions, use array for each address space
    }

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];

        if (!currentBucket || currentBucket.length === 0) {
            return null;
        }

        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key){
                return currentBucket[i][1]; 
            }
        }
    }

    // these two methods DO NOT account for collisions because each item could be an array of multiple arrays
    keys() {
        let keys = [];
        this.data.forEach(item => keys.push(item[0][0]));
        return keys;
    }

    values() {
        let values = [];
        this.data.forEach(item => values.push(item[0][1]));
        return values;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('123', 123);
myHashTable.set('456', 456);
myHashTable.set('789', 789);

/** Hashtables vs Arrays */

// HT much better for search and insert because typically O(1) where for arrays its O(n)
// HT is similar to arrays but with flexible keys
// Arrays are contiguous in memory so better for ordered data BUT some languages have ordered Hashtables

/**First Recurring Character */

// Nested loops is slow O(n^2) AND would not account for numbers beside each other like [2, 5, 5, 2] because outer loop will compare first number to all others first
// Hashmap answers improves time complexity, but worsens space complexity to O(n) by having an object to track values
let array = [2, 5, 1, 5, 3, 5, 1, 2, 4];

function firstRecurringChar(array) {
    let map = {};
    let char = null
    
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]){
            char = array[i];
            break;
        }
        map[array[i]] = true;
    }

    return char; 
}

console.log(firstRecurringChar(array));