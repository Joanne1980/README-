const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
   
    //title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description',
    },
    //Installation guide
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your Installation guide',
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage overview',
    },
    //License (multiple choice)
    {
        type: 'list',
        choices: ['MIT', 'GPL', 'GNU', 'Bsd-2-Clause'],
        name: 'license',
        message: 'What license type would you like for your project?',
    },
    //Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?',
    },
    //Tests
    {
        type: 'input',
        name: 'tests',
        message: 'what tests have you done?',
    },
    //Questions
    {
        type: 'data',
        name: 'questions',
        message: 'If you have any questions contact on below email',
    
    },
    //Github username
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    },

    //email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
        //const markdown = generateMarkdown(answers);
        //console.log(markdown);
        writeToFile('README.md', generateMarkdown({...answers}))
    });
}

// function call to initialize program
init();
