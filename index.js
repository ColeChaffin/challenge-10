const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color:',
    },
    {
        type: 'List',
        name: 'shape',
        message: 'choose a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color:',
    },
];

inquirer.createPromptModule(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeObj = new Shape();
    let svgElement = '';

    shapeObj.setColor(shapeColor);

    switch (shape) {
        case 'Triangle':
            const triangle = new Triangle();
            Triangle.setColor(shapeColor);
            svgElement = triangle.render();
            break;
        case 'Circle':
            const circle = new circle();
            circle.setColor(shapeColor);
            svgElement = circle.render();
            break;
        case 'Square':
            const square = new square();
            square.setColor(shapeColor);
            svgElement = square.render();
            break;
    }

    let x = 150, y = 120;
    if(shape === 'Triangle') {
        y = 135;
    } else if (shape === 'Square') {
        y = 145;
    }

    const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${svgElement}
    <text x="${x}" y="${y}" fill="${textColor}" font-size="50" text-anchor="middle">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', finalsvg);

    console.log('Generated logo.svg');
});