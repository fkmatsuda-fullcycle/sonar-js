const divide = require('../src/divide');

test("12 / 4 to be equal to 3", () => {
    expect(divide(12, 4)).toBe(3);
});