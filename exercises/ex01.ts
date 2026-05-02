interface Triangle {
  sideA: number
  sideB: number
  sideC: number
  calculatePerimeter: () => number
  calculateArea: () => number
  isTriangle: () => boolean
}

const myTriangle: Triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 5,

  calculatePerimeter: function (): number {
    return this.sideA + this.sideB + this.sideC
  },

  calculateArea: function (): number {
    const s = this.calculatePerimeter() / 2 // 半周
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  },

  isTriangle: function (): boolean {
    return (
      this.sideA + this.sideB > this.sideC &&
      this.sideB + this.sideC > this.sideA &&
      this.sideC + this.sideA > this.sideB
    )
  },
}

console.log(myTriangle.calculatePerimeter()) // 12
console.log(myTriangle.calculateArea()) // 6
console.log(myTriangle.isTriangle()) // true
