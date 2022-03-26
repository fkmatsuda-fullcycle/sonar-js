const subtract = require('../src/subtract');

test("3 - 2 to be equal 1", () => {
    expect(subtract(3, 2)).toBe(1);
});