const {Circle, Square, Triangle} = require("../shapes.js")

//Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="100" cy="105" r="80" fill="${this.color}"/>`)
    });
})

//Square
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="5" y="5" width="400" height="400" fill="${this.color}"/>`)
    });
})

//Triangle
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" polygon points="0,170 200,170 100,0" fill="${this.color}"/>`)
    });
})