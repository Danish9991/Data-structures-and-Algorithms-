# Graph

A graph is a data structure that consists of a set of vertices (also known as nodes) and a set of edges that connect these vertices. It is a fundamental data structure used to represent relationships between different entities. Graphs are widely used in various domains, including computer science, social networks, transportation networks, and more.


![Alt text](https://github.com/Danish9991/Data-structures-and-Algorithms-/blob/main/data-structure/graphs/images/graph.jpeg)

<h2>Adjacency Matrix: </h2>

An adjacency matrix is a two-dimensional matrix where the rows and columns represent the vertices of the graph. The value in each matrix cell indicates whether there is an edge between the corresponding vertices. For an undirected graph, the matrix is symmetric since the adjacency relationship is bidirectional. The value in each cell represents the presence or absence of an edge between the vertices.

Example of an adjacency matrix for an undirected graph:

|               | A             | B             | C             |  D            | 
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| A             | 0             | 1             | 1             | 0             |
| B             | 1             | 0             | 1             | 1             |
| C             | 1             | 1             | 0             | 1             |
| D             | 0             | 1             | 1             | 0             |


In this example, the value 1 in the matrix cell (i, j) indicates an edge between vertex i and vertex j.

<h2>Adjacency List:</h2>

An adjacency list represents the adjacency information for each vertex by maintaining a list of its neighboring vertices. It can be implemented using an array, a linked list, or a hash map. Each element in the array or hash map corresponds to a vertex, and the associated list contains the adjacent vertices.

Example of an adjacency list for an undirected graph:

A: [B, C]

B: [A, C, D]

C: [A, B, D]

D: [B, C]

In this example, the adjacency list representation shows the neighboring vertices for each vertex. For instance, vertex A is adjacent to vertices B and C.
