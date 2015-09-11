describe('findAndReplace', function() {
    it("will turn an string into an array of words", function () {
        expect(findAndReplace("Hello world")).to.eql(["Hello", "world"]);
    });
});
