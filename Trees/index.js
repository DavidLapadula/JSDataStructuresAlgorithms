/** Trees */

// Hierarchical structure
// Machine breaks down code in abstract syntax tree
// Node can only point to a child

/**Binary Tree */

// Each node can only have up to 2 children and 1 parent
// Perfect Binary tree: bottom layer full, node either has 0 or 2 children
    // Nodes on each level doubles as you move down
    // Nodes on bottom EQUAL to all nodes above it + 1. Means half data at the bottom
// Full Binary tree: node either has 0 or 2 children but bottom later NOT full
// O(log n)
    // 2^level tells you how many nodes in perfect tree
    // # of nodes = 2^h - 1 OR log nodes = height
    // logarithm will always be base 2


/**Binary Search Tree */

// Good for searching and comparing while preserving data relationships
    // Right child node always greater than parent
    // Left child node always smaller than parent
    // Node can only have up to 2 children
// Lookup,insert,delete all O(log n)

/**Balancing, Pros, Cons */

// Unbalanced, keep adding items to the right/left then turns into a LL. Turns lookup into O(n) which could be worst case
// Pros: potential O(log n) performance, data is structured/relational/ordered, flexible memory allocation
// Cons: No O(1) operations
