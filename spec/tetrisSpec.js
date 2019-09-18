
describe("FirstTest",function() {
    it("Should run tests", function() {
        expect(true).toBeTruthy();
    })
}) ;
describe("Tetris", function(){
    //var getShape = require('../tetris').getShape;
    
    it("GetShapeReturnsT", function(){
        expect(getShape('T')).toEqual(
            [
                [0,0,0],
                [1,1,1],
                [0,1,0]
            ]
        )
    })
});
