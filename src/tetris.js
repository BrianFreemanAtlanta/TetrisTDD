var shapeT=[
    [0,0,0],
    [1,1,1],
    [0,1,0]
] ;
var shapeL =         [
    [0,1,0],
    [0,1,0],
    [0,1,1]
] ;
var shapeJ =         [
    [0,1,0],
    [0,1,0],
    [1,1,0]
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
    switch (pShape) {
        case 'T':
            return shapeT;
            break;
        case 'I':
            return shapeI;
        case 'L':
            return shapeL;
        case 'J':
            return shapeJ;
            case 'O':
            return shapeO;
        default:
            break;
    }
    
};

// module.exports = getShape;
