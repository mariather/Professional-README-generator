// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// questions to answer
const questions = [

    {
        // main tittle
        type: "input",
        message: "What is the repository's title name?",
        name: "tittleName",

    },

    {
        //subtitle of the project
        type: "input",
        message: "Enter the subtitle of the project",
        name: "subtitle",
    },

    {
        //Link's project
        type: "input",
        message: "Enter link of the project",
        name: "link",
    },
    {
        //description
        type: "input",
        message: "Enter the description of the project",
        name: "description",
    },
 
    {
        //usage
        type: "input",
        message: "What is the project's usage?",
        name: "usage",

    },
    
    {
        //instructions
        type: "input",
        message: "Enter instructions and examples of your project in case is needed",
        name: "instructions",
    },
   
    {
        //status of the project
        type: "input",
        message: "Enter the status of the project",
        name: 'status',
    },
    {
        //technologies used
        type: "input",
        message: "Enter the Contribution Guidelines",
        name: 'contribution',
    },
    {
        //github username
        type: 'input',
        message: 'Enter your github username',
        name: 'github',
    },
    {
        //email address
        type: 'input',
        message: 'Enter your contact email address',
        name: 'email',
    },

    {
        //license
        type: "list",
        message: "Choose your project license",
        choices: [
            "None",
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "GNU AGPLv",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MIT License",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0",

        ],
        name: "license",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("README.md created successfully")
        }
    });
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((response) =>
    writeToFile(response.fileName, response)
    );
}

// Function call to initialize app
init();
