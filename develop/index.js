const {Circle, Square, Triangle } = require("./dist/shapes");
const inquirer = require("inquirer");
const fs = require("fs");


class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}
        </svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="100" y="120" font-size="40" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}
//an array of questions for user input
const questions = [
{
    type: "input",
    name: "text",
    message: "Enter no more than 3 Characters:",
    validation: (value) =>  {
        if ( value.length > 0 && value.length <= 3) {
            return true;
        } else {
            return "Characters must be no more than 3 characters"
        }
    }
},
{
    type: "input",
    name: "textColor",
    message: "Enter the text color of choice (either a color keyword or a hexadecimal)",
    validate: (value) => {
        if (value) {
            return true;
        } else {
            return "You must select a text color";
        }
    }
},
{
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color of choice (either a color keyword or a hexadecimal)",
    validate: (value) => {
        if (value) {
            return true;
        } else {
            return "You must select a shape choice";
        }
    }
},
{
    type: "list",
    name: "shape",
    message: "What is your shape of choice?",
    choices: ["Circle", "Square", "Triangle"],
    validate: (value) => {
        if (value) {
            return true;
        } else {
            return "You must select a choice";
        }
    }
}
];

function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            var userText = "";
            if (data.text.length >= 0 && data.text.length <= 3) {
                userText += data.text;
            } else {
                console.log("Text must have no more than 3 characters.");
                return;
            }

            let userTextColorChoice = '';
            userTextColorChoice += data.textColor;

            let userShapeColorChoice = '';
            userShapeColorChoice += data.shapeColor;

            // Set the shape that the user selects
            let userShapeChoice;

            if (data.shape === "Circle") {
                userShapeChoice = new Circle();
            } else if (data.shape === "Square") {
                userShapeChoice = new Square();
            } else if (data.shape === "Triangle") {
                userShapeChoice = new Triangle();
            }
            
            userShapeChoice.setColor(userShapeColorChoice.toLowerCase());

            // Set text color 
            var svg = new SVG();
            svg.setTextElement(userText.toUpperCase(), userTextColorChoice.toLowerCase());
            svg.setShapeElement(userShapeChoice);

            const writeSVG = svg.render();
            

            writeToFile(userText, writeSVG);
        })
}

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.svg`, data, (err) => 
    err ? console.log(err) : console.log("Successfully created svg shape!"))
}

init();