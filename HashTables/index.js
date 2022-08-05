/** Intro */

// Key used as index in memory using a hash function. Hash function produces a key that acts as an index
// Different implementations: Maps can have ANY value as key and maintain insertion order. Objects are unordered and must have string as key

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