const {Circle, Square, Triangle} = require("./shapes.js")

//Circle
describe('Circle', () => {
    test('renders correctly', () => {
        const expectedSvg = '<circle cx="100" cy="105" r="80" fill="green"/>';
        const circle = new Circle();
        circle.setColor("green");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg)
    });
})

//Square
describe('Square', () => {
    test('renders correctly', () => {
        const expectedSvg = '<rect x="5" y="5" width="400" height="400" fill="green"/>';
        const square = new Square();
        square.setColor("green");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg)
    });
})

//Triangle
describe('Triangle', () => {
    test('renders correctly', () => {
        const expectedSvg = '<polygon height="100%" width="100%" points="0,170 200,170 100,0" fill="green"/>';
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg)
    });
})