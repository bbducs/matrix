var expect = require('chai').expect;
var matrix = require('./matrix.js');
var arr = [
    [1,0,1],
    [1,0,1],
    [0,1,1]
   ];
describe("Check whole matrix Adjecent alive number ",function(){
    it("This is your first Test case of (0,0)",function(){
        var expected = true;
        var numberOfAlive = 1;
        expect(matrix.newState(arr,0,0,numberOfAlive)).to.equal(expected)
    })

    it("This is your first Test case of (0,1)",function(){
        var expected = true;
        var numberOfAlive = 3;
        expect(matrix.newState(arr,0,1,numberOfAlive)).to.equal(expected)
    })

    it("This is your first Test case of (0,1)",function(){
        var expected = true;
        var numberOfAlive = 5;
        expect(matrix.newState(arr,1,1,numberOfAlive)).to.equal(expected)
    })

    it("This is your first Test case of (0,1)",function(){
        var expected = true;
        var numberOfAlive = 1;
        expect(matrix.newState(arr,0,2,numberOfAlive)).to.equal(expected)
    })

    it("This is your first Test case of (0,1)",function(){
        var expected = true;
        var numberOfAlive = 2;
        expect(matrix.newState(arr,2,2,numberOfAlive)).to.equal(expected)
    })
})


