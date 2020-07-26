const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please enter some installation instructions',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to include usage informatin?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some information on the usage',
        when: ({ confirmUsage }) => confirmUsage,
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to include contribution guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide some information on the contribution guidelines',
        when: ({ confirmContribution }) => confirmContribution,
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter some test instructions',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter testing instructions!');
                return false;
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return `
        Name: ${fileName}
        Data: ${data}
    `;
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(data => {
    console.log(data)
    return writeToFile(data);
})

