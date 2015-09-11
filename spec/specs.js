describe('findAndReplace', function() {
    it("will turn a string into an array of words", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.a("array");
    });

    it("will change a certain word in the string to a new word", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.eql(["Hello", "universe"]);
    });

    it("will change multiple instances of the same word to a new word", function() {
        expect(findAndReplace("Hello world world", "world", "universe")).to.eql(["Hello", "universe", "universe"]);
    });

    it("will change a word regardless of capitalization in the input word", function() {
        expect(findAndReplace("Hello world hello", "Hello", "Goodbye")).to.eql(["Goodbye", "world", "Goodbye"]);
    });

    it("will change a word regardless of capitalization in the string", function() {
        expect(findAndReplace("Hello world hello", "hello", "Goodbye")).to.eql(["Goodbye", "world", "Goodbye"]);
    });
});
