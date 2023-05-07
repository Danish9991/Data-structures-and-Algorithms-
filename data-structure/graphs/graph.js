/**
 * Graph class performs the operations of the graph
 */

export class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  /**
   * addVertex method is used to add vertext on the graph
   * @param {*} node
   */

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  /**
   * addEdge method adds the edge in the list
   * @param {*} node1
   * @param {*} node2
   */

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  /**
   * showConnections method is a helper method to show the relationship between each node in the graph
   */

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
