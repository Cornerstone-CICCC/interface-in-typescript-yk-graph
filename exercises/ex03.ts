// Let's make the Triangle interface reusable from the exercise above.
// Create a new interface named Shape with the methods to calculate the perimeter and area: calculatePerimeterand calculateArea.
// Implement the Shape interface in news interfaces (extends), like Rectangle, Circle, and Square.
// Make the correct modifications in the methods to calculate the perimeter and area for each shape.

interface Shape {
  calculatePerimeter: () => number
  calculateArea: () => number
}

interface Rectangle extends Shape {
  width: number
  height: number
}

interface Circle extends Shape {
  radius: number
}

interface Square extends Shape {
  sideLength: number
}

class MyRectangle implements Rectangle {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height)
  }

  calculateArea(): number {
    return this.width * this.height
  }
}

class MyCircle implements Circle {
  radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

class MySquare implements Square {
  sideLength: number

  constructor(sideLength: number) {
    this.sideLength = sideLength
  }

  calculatePerimeter(): number {
    return 4 * this.sideLength
  }

  calculateArea(): number {
    return Math.pow(this.sideLength, 2)
  }
}

const myRectangle = new MyRectangle(5, 10)
console.log(myRectangle.calculatePerimeter()) // 30
console.log(myRectangle.calculateArea()) // 50

const myCircle = new MyCircle(7)
console.log(myCircle.calculatePerimeter()) // 43.982297150257104
console.log(myCircle.calculateArea()) // 153.93804002589985

const mySquare = new MySquare(4)
console.log(mySquare.calculatePerimeter()) // 16
console.log(mySquare.calculateArea()) // 16
