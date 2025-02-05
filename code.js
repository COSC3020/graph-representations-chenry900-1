function convertToAdjList(adjMatrix) {
    var adjList = [];

    for(var o = 0; o < adjMatrix.length; o++) {// o for outside not zero
        adjList[o] = [];
        for (var i = 0; i < adjMatrix.length; i++) {
            if (adjMatrix[o][i] == 1) {
                adjList[o].push(i);
            }
        }
    }        
    return adjList;
}
