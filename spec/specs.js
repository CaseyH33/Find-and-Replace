describe('findAndReplace', function() {
    it("will turn a string into an array of words", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.a("array");
    });

    it("will change a certain word in the string to a new word", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.eql(["Hello", "universe"]);
    });
});
