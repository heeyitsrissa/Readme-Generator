// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/Users/marissapratt/bootcamp/homework/Readme-Generator/utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Leave description for project here:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What was the installation process like?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Leave usage information here:'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'contibution guidlines:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Please leave test instructions here:'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is you github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
    const formattedFileName = `${fileName.toLowerCase().split(' ').join('-')}.md`;
    fs.writeFile(formattedFileName,data,(err) => {
        if(err) {
            console.error('Error writing file', err);
        } else {
            console.log('README.md successfully created')
        }
    });
 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const readmeFile = generateMarkdown(response);
        writeToFile('README.md', readmeFile);
    })
    .catch((error) =>{
        console.error('Error:', error);
    })
}



// Function call to initialize app
init();
