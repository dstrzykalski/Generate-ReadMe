// TODO: Include packages needed for this application\
//This code requires inquire and fs. inquired is used to prompt the user with the array of questions and fs is used in saving the file.
//It also requires the generateMarkdown file which is used to generate the readme file.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');


// TODO: Create an array of questions for user input
//This is where the array of questions that will be asked in order to form the readme is created. 
//It currently takes in title, description, features, authors, and license. Other options could be added as needed.
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please provide features for your project.'
    },
    {
        type: 'input',
        name: 'authors',
        message: 'Please provide the authors of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
];

// TODO: Create a function to write README file
//This function creates a read me using the write file method. This method takes in the parameters of the file name and the data that will be written to the file, as prompted in the generateMarkdown.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Test');
    });
}

// TODO: Create a function to initialize app
//This function initializes the app by use of inquirer. The user will be given a forum of questions to answer that will be used to generate the readme file.
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        });
}

//The final function which calls the function we just created above.
init();
