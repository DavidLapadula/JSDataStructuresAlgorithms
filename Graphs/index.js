/**Intro */

// Item is a Node/vertex connected by edges
// Model links in real world rel'ps
// Directed (uni-directional) vs Undirected (bi-directional) --> twitter vs facebook
// Weighted (edges carry info) vs Unweighted (edges do not carry info) --> optimal paths
// Cyclic (can return to start) vs Acyclic
// Relational data is beneficial, but scaling is difficult

/**Graph Data */


const edgeList = [[0, 2], [2, 3], [2,1], [1,3]]; // lists the connections
const adjacencyList = [[2], [2, 3], [0, 1, 3], [1, 2]]; // index is node, values are nodes neighbors
const adjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]; // index represents the node, and each item in sub-matrix is the nodes relation to the corresponding node, 0 is yes, 1 is no


/** Implement Graph */

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node) {
        this.adjacencyList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // undirected, requires pushing a connection to either node
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    showConnections() { 
        const allNodes = Object.keys(this.adjacentList); 
        for (let node of allNodes) { 
          let nodeConnections = this.adjacentList[node]; 
          let connections = ""; 
          let vertex;
          for (vertex of nodeConnections) {
            connections += vertex + " ";
          } 
          console.log(node + "-->" + connections); 
        } 
    }
}