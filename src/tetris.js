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

var shapeI = 
[
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,1,0]
]
function getShape(pShape) {
    if (pShape=='L') {
        return shapeL;
    } if (pShape=='I') {
        return shapeI;
    }
    else {
        return shapeT;
    }
    
};

// module.exports = getShape;
