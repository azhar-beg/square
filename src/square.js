class Square {
  constructor(leftBottom, width) {
    this.leftBottom = leftBottom;
    this.width = width;
  }

  equals(anotherSquare) {
    return anotherSquare instanceof Square &&
      anotherSquare.leftBottom.equals(this.leftBottom) &&
      this.width === anotherSquare.width;
  }
}

exports.Square = Square;
