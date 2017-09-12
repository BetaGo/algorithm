const graph = {
  start: {
    a: 6,
    b: 2
  },
  a: {
    end: 1
  },
  b: {
    end: 5
  },
  end: null
};

const costs = {
  a: 6,
  b: 2,
  end: Infinity
};

const parents = {
  a: 'start',
  b: 'start',
  end: null
};

const processed = [];

let node = findLowestCostNode(costs);
while (node !== null) {
  const cost = costs[node];
  neighbors = graph[node];
  for (key in neighbors) {
    const newCost = cost + neighbors[key];
    if (costs[key] > newCost) {
      costs[key] = newCost;
      parents[key] = node;
    }
  }
  processed.push(node);
  node = findLowestCostNode(costs);
}
