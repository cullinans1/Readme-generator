const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the your email?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
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
        type: 'input',
        name: 'usage',
        message: 'Provide some information on the usage',
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
        type: 'checkbox',
        name: 'license',
        message: 'What licenses are applicable? (Select all that apply)',
        choices: ['apache', 'mit', 'gpl'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide some information on the contribution guidelines',
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
    return fs.writeFileSync(
        path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(data => {
    console.log('README is complete!');
    return writeToFile('README.md', generateMarkdown({...data}))
})

