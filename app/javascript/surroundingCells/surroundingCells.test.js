import surroundingCells from "./surroundingCells.js";

describe("Given the function surroundingElements", () => {
  describe("When it receives a list [[1, 2, 3], [4, 5, 6]] and value 5", () => {
    test("Then it should return a list [1, 2, 3, 4, 6]", () => {
      const listOfListOfNumbers = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      const value = 5;
      const expectedResult = [[1, 2, 3, 4, 6]];

      const result = surroundingCells(listOfListOfNumbers, value);

      expect(result).toEqual(...expectedResult);
    });
  });
});
