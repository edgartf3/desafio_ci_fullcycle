const subs = require('./subs')

test("add 3 + 2 to be equal 1", () => {
    expect(subs(3,2)).toBe(1);
})