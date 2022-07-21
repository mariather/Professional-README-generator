

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//  function to initialize the README app
function init() { 
    inquirer.prompt(questions)
    .then((response) =>
    writeToFile(response.fileName, response)
    );
} 
//Array questions to answer user
const questions = [

    {
        //filename
        type: 'input',
        message: 'Enter the filename of the project',
        name: 'fileName',
    },

    {
        //title of the project
        type: "input",
        message: "Enter the title of the project",
        name: "title",
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
        message: "Enter the technologies used",
        name: "technologies",
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
        name: "license",
        choices: [
            "None",
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MIT License",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0",

        ],
        
    },
];



// function to write the README file
function writeToFile(fileName, data) {
   
 fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error("error") : console.log("well done"))
}



// Function call to initialize app
init();
