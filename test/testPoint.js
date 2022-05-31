const assert = require('assert');
const { Point } = require('../src/point.js');

describe('Point', () => {
  it('Should validate equality of two points', () => {
    const p1 = new Point(0, 0);
    const p2 = new Point(0, 0);
    assert.ok(p2.equals(p1));
  });
});