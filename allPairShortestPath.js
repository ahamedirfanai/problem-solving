const INF = 99999;

function floydWarshall(graph) {
  const V = graph.length;
  const A = Array.from(Array(V), () => new Array(V).fill(0));
  
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++) {
      A[i][j] = graph[i][j];     
    }
  }

  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        if ( A[i][j] > A[i][k] + A[k][j]) {
            A[i][j] = A[i][k] + A[k][j];
        }
      }
    }
  }

  return A;
}
const graph = [
  [0, 3, INF, 7],
  [8, INF, 2, INF],
  [5, INF, 0, 1],
  [2, INF, INF, 0],
];

console.table(floydWarshall(graph));
