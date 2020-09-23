import { hello } from "../src/hello";
import { expect } from "chai";
import "mocha";

//Describe just describes the test, it runs the test.
//Test only one thing at a time.

describe("Hello function", () => {
    it("should return hello world", () => {
        const result = hello();
        expect(result).to.equal("Hello world!");
    });
});
