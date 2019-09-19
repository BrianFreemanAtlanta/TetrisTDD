
describe("FirstTest",function() {
    it("Should run tests", function() {
        expect(true).toBeTruthy();
    })
}) ;
describe("Tetris", function(){
    //var getShape = require('../tetris').getShape;
    
    it("GetShapeTReturnsT", function(){
        expect(getShape('T')).toEqual(
            [
                [0,0,0],
                [1,1,1],
                [0,1,0]
            ]
        )
    })
    it("GetShapeLReturnsL", function(){
        expect(getShape('L')).toEqual(
            [
                [0,1,0],
                [0,1,0],
                [0,1,1]
            ]
        )
    })
    it("GetShapeIReturnsI", function(){
        expect(getShape('I')).toEqual(
            [
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0]
            ]
        )
    })
    it("GetShapeOReturnsO", function(){
        expect(getShape('O')).toEqual(
            [
                [1,1],
                [1,1]
            ]
        )
    })
    it("GetShapeJReturnsJ", function(){
        expect(getShape('J')).toEqual(
            [
                [0,1,0],
                [0,1,0],
                [1,1,0]
            ]
        )
    })
    it("GetShapeSReturnsS", function(){
        expect(getShape('S')).toEqual(
            [
                [0,1,1],
                [0,1,0],
                [1,1,0]
            ]
        )
    })
    it("GetShapeZReturnsZ", function(){
        expect(getShape('Z')).toEqual(
            [
                [1,1,0],
                [0,1,0],
                [0,1,1]
            ]
        )
    })
    it("getBoard510Returns5By10",function () {
        expect(getBoard(5,10)).toEqual(
        [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
        ]            
        )
    })
    it("rotateCWTIsCorrect", function() {
        let piece=getShape('T');
        rotateShapeCW(piece);
        expect(piece).toEqual(
            [
                [0,1,0],
                [1,1,0],
                [0,1,0]
            ]
        )
    })    
    it("rotateCCWTIsCorrect", function() {
        let piece=getShape('T');
        rotateShapeCCW(piece);
        expect(piece).toEqual(
            [
                [0,1,0],
                [0,1,1],
                [0,1,0]
            ]
        )
    })    
});
