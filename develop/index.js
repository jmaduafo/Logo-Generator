const {Circle, Square, Triangle } = require("./dist/shapes");
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");


class SVG {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}
        </svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x= "150" y="125" font-size= "60" text-anchor="middle" fill=${color}>${text}</text>`
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
        if (value.length <= 3) {
            return true;
        } else {
            return "Characters must be no more than 3 characters"
        }
    }
},
{
    type: "input",
    name: "textColor",
    message: "TEXT COLOR: Enter a color keyword (OR hexadecimal number):",
},
{
    type: "input",
    name: "shapeColor",
    message: "SHAPE COLOR: Enter a color keyword (OR hexadecimal number):",
},
{
    type: "list",
    name: "shape",
    message: "What is your image of choice?",
    choices: ["Circle", "Square", "Triangle"],
}
];

function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const SVG = new SVG();
            SVG.setTextElement(data.text, data.color.toLowerCase());
            SVG.setShapeElement(data.shape);

            const writeSVG = `
            ${SVG.render()}
            
            `

            writeToFile(writeSVG, data.text);
        })
}

function writeToFile(data, fileName) {
    fs.writeFile(`./${fileName.toLowerCase().split(" ").join("")}.svg`, data, (err) => 
    err ? console.log(err) : console.log("Successfully created svg shape!"))
}

init()