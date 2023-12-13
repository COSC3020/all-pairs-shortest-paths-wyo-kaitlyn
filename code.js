function allPairsShortestPaths(graph) {
    let dist = [];

    for(let u = 0; u < graph.length; u++) {
        dist[u] = [];
        for(let v = 0; v < graph.length; v++) {
            // initialize a |V| x |V| matrix dist to infinity
            dist[u][v] = Infinity;
            // for each vertex v in V, dist[v][v] = 0;
            if (u == v) {
                dist[u][v] = 0;
            }
            // for each edge (u, v) = e in E, dist[u][v] = weight((u,v))
            else if (graph[u][v] > 0) {
                dist[u][v] = graph[u][v];
            }
        }
    }

    // final bit from the pseudocode
    for(let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for(let j = 0; j < graph.length; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}
