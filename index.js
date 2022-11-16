const buildGraph = edges => {
  const graph = {};

  for (const [node1, node2] of edges) {
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];

    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return graph;
};

const shortestPath = (edges, src, dst) => {
  const graph = buildGraph(edges);
  return explore(graph, src, dst);
};

const explore = (graph, src, dst) => {
  const visited = new Set();
  const queue = [{ node: src, distance: 0 }];

  while (queue[queue.length - 1].node !== dst) {
    for (const neighbor of graph[queue[queue.length - 1].node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.unshift({
          node: neighbor,
          distance: queue[queue.length - 1].distance + 1,
        });
      }
    }

    queue.pop();
  }

  return queue[queue.length - 1].distance;
};

// const edges = [
//   ['w', 'x'],
//   ['x', 'y'],
//   ['z', 'y'],
//   ['z', 'v'],
//   ['w', 'v'],
// ];

const edges = [
  ['a', 'b'],
  ['b', 'e'],
  ['e', 'i'],
  ['i', 'j'],
  ['j', 'k'],
  ['e', 'l'],
  ['l', 'm'],
  ['m', 'i'],
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'k'],
  ['g', 'f'],
  ['f', 'e'],
  ['f', 'h'],
  ['h', 'i'],
];

console.log(shortestPath(edges, 'a', 'k'));
