class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(anotherPoint) {
    return anotherPoint instanceof Point && this.x === anotherPoint.x &&
      anotherPoint.y === this.y;
  }
}

exports.Point = Point;
