// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        name: 'GithubUrl',
        message: 'What is the link to this github Repository?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data, err) {
    
    err ? console.error(err) : console.log('README.md successfully made')
 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const readmeFile = 
        `${response.title}
        
        ## Description 
        ${response.Description}
        
        ## Table Of Contents
        -[Installation]{#Installation}
        -[Usage]{#Usage}
        -[License]{#License}
        -[Contributing]{#Contributing}
        -[Tests]{#Tests}
        -[Questions]{#Questions}
        
        ## Installation
        ${response.Installation}
        
        ## Usage
        ${response.Usage}
        
        ## License
        
        ## Contributing
        ${response.Contributing}
        
        ## Tests
        ${response.Tests}
        
        ## Questions
        Github: ${response.GithubUrl}
        Email: ${response.email}`;

        writeToFile('README.md', readmeFile);
    })
}

// Function call to initialize app
init();
