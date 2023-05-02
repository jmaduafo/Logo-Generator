# Logo Generator

## Description

The goal of this project is to generate a custom logo in a svg file according to the user's needs. This assignment helped me to practice with object orientated programming, something that I've had trouble with in the past. I learned how to manipulate and combine classes and constructors to get the information and data that we want. 

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

For the assignment, you would need to install the package.json by simply entering "npm init" in the integrated terminal and then you can install inquirer by typing in "npm i inquirer@8.2.4". 

## Usage

First, it would be run by entering "node index.js" in the terminal. The user would then be asked a series of questions about how they would want their svg file to look. They are asked the text color, the shape color, and they'd need to pick a shape of their choosing. They would also need to enter in a text no more than three characters long. This is to ensure that the characters fit perfectly within the selected shape. Once the information is entered appropriately, a logo within a svg file would then be produced for the user to view and use to their liking.

[screen-capture (3).webm](https://user-images.githubusercontent.com/87540591/235498654-f8603ae2-31fa-4655-b9c2-b8c6788561fe.webm)

## Contributions

N/A

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests

To run the test, first install "jest" globally by typing in "npm i --save-dev jest" and run it in the integrated terminal with "npm test". All the tests should pass.

## Questions

- Github: https://github.com/jmaduafo



