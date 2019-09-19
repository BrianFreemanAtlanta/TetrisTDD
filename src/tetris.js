var shapeT=         
    [
        [0,0,0],
        [1,1,1],
        [0,1,0]
    ] ;
var shapeL =         
    [
        [0,1,0],
        [0,1,0],
        [0,1,1]
    ] ;
var shapeJ =         
    [
        [0,1,0],
        [0,1,0],
        [1,1,0]
    ] ;
var shapeS =         
    [
        [0,1,1],
        [0,1,0],
        [1,1,0]
    ] ;
var shapeZ =         
    [
        [1,1,0],
        [0,1,0],
        [0,1,1]
    ] ;

var shapeI =
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
    ]
var shapeO =
    [
        [1,1],
        [1,1]
    ]

    function getShape(pShape) {
     let retShape = [];
    switch (pShape) {
        case 'T':
             retShape =  shapeT;
            break;
        case 'I':
             retShape =  shapeI;
            break;
        case 'L':
             retShape =  shapeL;
            break;
        case 'J':
             retShape =  shapeJ;
            break;
        case 'O':
             retShape =  shapeO;
            break;
        case 'S':
             retShape =  shapeS;
            break;
        case 'Z':
             retShape =  shapeZ;
            break;
        default:
            break;
    }
    //now return copy of the array
    let retShape2=[];
    for (let index = 0; index < retShape.length; index++) {
        retShape2[index]=retShape[index].slice();
    };
    return retShape2;
};

function getBoard(X,Y) {
    var retBoard=[];
    for (let yIndex = 0; yIndex < Y; yIndex++) {
        var curArray = [];
        
        for (let xPos = 0; xPos < X; xPos++) {
            curArray.push(0);
        }
        retBoard.push(curArray);
    }
    return  retBoard;
};
// rotate code adapted from https://code.likeagirl.io/rotate-an-2d-matrix-90-degree-clockwise-without-create-another-array-49209ea8b6e6
function rotateShapeCW(matrix) {
    const n = matrix.length;
    const x = Math.floor(n/ 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          let k = matrix[i][j];
          matrix[i][j] = matrix[y - j][i];
          matrix[y - j][i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[j][y - i];
          matrix[j][y - i] = k
       }
    }
}
function rotateShapeCCW(matrix) {
    const n = matrix.length;
    const x = Math.floor(n/ 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          let k = matrix[i][j];
          matrix[i][j] = matrix[j][y - i];
          matrix[j][y - i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[y - j][i];
          matrix[y - j][i] = k;
       }
    }
}
