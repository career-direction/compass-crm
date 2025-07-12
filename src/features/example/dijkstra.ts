export interface Graph {
  [node: string]: { [neighbor: string]: number };
}

export interface DijkstraResult {
  distances: { [node: string]: number };
  previous: { [node: string]: string | null };
  path: (start: string, end: string) => string[];
}

export function dijkstra(graph: Graph, start: string): DijkstraResult {
  const distances: { [node: string]: number } = {};
  const previous: { [node: string]: string | null } = {};
  const unvisited = new Set<string>();

  for (const node in graph) {
    distances[node] = node === start ? 0 : Infinity;
    previous[node] = null;
    unvisited.add(node);
  }

  while (unvisited.size > 0) {
    const current = Array.from(unvisited).reduce((min, node) =>
      distances[node] < distances[min] ? node : min
    );

    unvisited.delete(current);

    if (distances[current] === Infinity) {
      break;
    }

    for (const neighbor in graph[current]) {
      if (unvisited.has(neighbor)) {
        const alt = distances[current] + graph[current][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = current;
        }
      }
    }
  }

  const path = (start: string, end: string): string[] => {
    const result: string[] = [];
    let current: string | null = end;

    while (current !== null) {
      result.unshift(current);
      current = previous[current];
    }

    return result[0] === start ? result : [];
  };

  return { distances, previous, path };
}