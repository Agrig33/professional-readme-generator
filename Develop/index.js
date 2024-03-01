// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage details',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['MIT', 'Apache', 'GNU GPLv3','None']
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to do tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide info on how a user can contribute ',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide your email address',
    }
];


// // TODO: Create a function to write README file
function writeReadme(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Oops something went wrong, Readme not created:', err);
        } else {
            console.log(`${ReadMe} created successfully!`);
        }
});
    
    
    
    // const readmeContent = generateMarkdown(data);
        fs.writeToFile('README.md', readmeContent);
        console.log('ReadMe created successfully!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Initializing app...');
    });
}

// Function call to initialize app
init();
