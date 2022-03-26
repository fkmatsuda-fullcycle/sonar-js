const multiply = require('../src/multiply');

test("4 x 3 to be equal 12", () => {
    expect(multiply(4, 3)).toBe(12);
});