// declare class

// export class using module.exports
class Shape {
    color = "Red"
    constructor(color) {
        this.color = color;
    }

    drawShape() {
        console.log(`${this.color} is colored`);

    }
    calculateArea() {
        console.log(`${this.color}  area is to be calculated`)
    }

}
module.exports = Shape
