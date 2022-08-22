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

/** Implement BST */


class Node {
    constructor() {
        this.left = null; 
        this.right = null; 
        this.value = value;
    }
}


 // iteration methods choose between left and right, divvide and conquer method makes it O(log n)
 class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      
      let currentNode = this.root;
      let parentNode = null;

      while(currentNode) {
        // Objective 1: Traverse tree to find the value
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        }
        
        if (value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        }
        
        // Value found
        if (currentNode.value === value) {
          // Objective 2: Find the next biggest value after the item being removed

          // No right child means next biggest is left child so point parent at left to skip over item and remove it
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            }

            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } 
            
            if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // Has a right child but that child has no values smaller than it, right child is next biggest
          if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left; // make left tree of current (smaller than it) the left tree of right child, which is next biggest
            
            if(parentNode === null) {
              this.root = currentNode.right;
            }
            
            // Checking to see which side of the parent node we are on, and then point the correct side of the parent tree to the next biggest item, which is current node.right
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
              
            if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }


          // Need to find leftest leaf node, which would be the next biggest
          if (currentNode.right !== null && currentNode.right.left !== null) {
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              
              // traverse down the tree to find leftmost
              while (leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
              
              leftmostParent.left = leftmost.right; // make right side of next biggest item left side of the parent
              // replace removal item subtree(s) with those of next biggest
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right; 
    
              // remove item by pointing parent at next biggest
              if(parentNode === null) {
                this.root = leftmost;
              } else {
                if(currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if(currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
          }

          return true;
        }
      }
    }
  }

const tree = new BinarySearchTree();

/**AVL BST */
// Balanced: 2 siblings never differ by > 1 level. No leaf should have much longer path to root node compared to other leaves
// Subtrees of h1, h2 then |h1 - h2| <= 1 to be balances. Applies to ALL subtrees, even those without one child
// More rotations, but more balanced

/**R-B BST */
// Adheres to rules to remain balances and ensure O(log n). Rules relating to nodes painted red/black
// Rotations allow the tree to remain balanced by following the rules
// Less balanced, but less rotations, so less expensive
// 1 extra bit per node needed for the color

/**Binary Heap */
// Different from Memory Heap, which is storage
// Min/Max heap: descending/ascending values
// Used when priority is required
// Lookup is O(n) because NO ORDER to left or right, need to check all child nodes
// Good for comparison because can easily tell greater than or less than
// Add values from left to right by finding the next element with < 2 children, which keeps levels balances, changes bubble up through switching if necessary to maintain MAX/MIN
// Low memory and do not need to be rebalanced

/** Priority Queue */
// Queue but each element have priority, so some can skip ahead
// Searching slower than BST, but inserts MOSTLY fast unless need to bubble up changes
// MAX/MIN are O(1) because its the top item

/**Trie */

// Used for seaching text. See if part of word exists in a text
// Auto completion: tree is created out of possible words for each child node
// O(length of word): just find letter starts with (O(1) because is direct child) and then check length of that sub node against length of word
// Memory saved because of prefixes. The 'N' from 'not' and 'news' is shared
