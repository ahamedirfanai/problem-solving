
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };
  
  function bfs(startNode) {
 
    const visited = {};
    const queue = [];
  

    queue.push(startNode);
  

    while (queue.length > 0) {

      const currentNode = queue.shift();
  
      if (visited[currentNode]) {
        continue;
      }
  

      visited[currentNode] = true;
  
  
      const neighbors = graph[currentNode];
      for (let i = 0; i < neighbors.length; i++) {
        queue.push(neighbors[i]);
      }
    }
  

    return Object.keys(visited);
  }
  

  console.log(bfs('A')); 
  