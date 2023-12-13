const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let graph = [ [0, 0, 0, 1],
              [0, 0, 4, 5],
              [1, 0, 0, 0],
              [2, 3, 0, 0] ];

let test = [ [ 0, 4, 8, 1 ], 
             [ 5, 0, 4, 5 ], 
             [ 1, 5, 0, 2 ], 
             [ 2, 3, 7, 0 ] ];
// the return of chart out the graph on a sheet of paper 
// to figure out what it should be
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(test));


let graph2 = [ [0, 0, 0],
               [0, 0, 0],
               [0, 0, 0] ];

let test2 = [ [0, Infinity, Infinity],
              [Infinity, 0, Infinity],
              [Infinity, Infinity, 0] ];
assert(JSON.stringify(allPairsShortestPaths(graph2)) == JSON.stringify(test2));


let graph3 = [ [0, 2, 4],
               [0, 0, 1],
               [2, 1, 0] ];

let test3 = [ [0, 2, 3],
              [3, 0, 1],
              [2, 1, 0] ];
assert(JSON.stringify(allPairsShortestPaths(graph3)) == JSON.stringify(test3));


let graph4 = [];
assert(JSON.stringify(allPairsShortestPaths(graph4)) == JSON.stringify([]));
