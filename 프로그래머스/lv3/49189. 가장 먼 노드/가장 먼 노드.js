const getNodeInfo = (n, edge) => {
    const connects = new Array(n).fill().map(_ => []);
    
    for (const e of edge) {
        connects[e[0]-1].push(e[1] - 1);
        connects[e[1]-1].push(e[0] - 1);
    }
    return connects;
}

const bfs = (connects) => {
    const visited = [1];
    const queue = [0];
    
    while (queue.length) {
        const cur = queue.shift();
    
        for (const next of connects[cur]) {
            if (!visited[next]) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
            }
        }
    }
    return visited;
}


function solution(n, edge) {
    const connects = getNodeInfo(n, edge);
    const visited = bfs(connects);
    const max = Math.max(...visited);
    
    return visited.filter(el => el === max).length;
}