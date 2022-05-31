const assert = require('assert');
const { Point } = require('../src/point.js');
const { Square } = require('../src/square.js');

describe('Square', () => {
  it('Should validate equality of two square', () => {
    const square1 = new Square(new Point(0, 0), 10);
    const square2 = new Square(new Point(0, 0), 10);
    assert.ok(square1.equals(square2));
  });
});