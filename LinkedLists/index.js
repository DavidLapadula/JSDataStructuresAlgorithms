/**Intro */

// Arrays bad any time need to shift index
// Null terminated; tail node will point to null

/**Pros and Cons */
// To insert still need to traverse items BUT items DO NOT need to be shifted because they are not indexed
// Traversing LL a bit slower because items distributed
// LL do have some order so can be sorted, unlike Hashtable
// Although insert/delete is O(n), USUALLY much better because wont always need to traverse


/**Pointer */

// 'Delete' only removes unused data, so could just delete reference to item, but item is still there
// When actual item in memory not used anymore, garbage collection will handle it


/**Implement LL */

