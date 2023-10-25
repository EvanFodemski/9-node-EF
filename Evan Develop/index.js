// TODO: Include packages needed for this application   
const fs = require ("fs");
const inquirer = require("inquirer");
const { error } = require("console");
const generateMarkdown = require("./utils/generateMarkdown");

//function to validate the inputs
function validateInput(value){
    if(value != ""){
        return true;
    }else {
        return "please input some text."
    };
}

// TODO: Create an array of questions for user input
const questions = [
    //For user to enter their title.
    {
        type:"input",
        name:"pageTitle",
        message:"What's the title of your Repo/Prject?",
        validate: validateInput,
    },
    //For user to enter their Description
    {
        type:"input",
        name:"pageDescription",
        message:"Enter the description of your project.",
        validate: validateInput,
    },
   
    //For user to enter their Insatallation Instructions
    {
        type:"input",
        name:"pageInstall",
        message:"Enter your Installation Instructions.",
        validate: validateInput,
    },
    //For user to enter Usage Info
    {
        type:"input",
        name:"pageUsage",
        message:"Enter your Usage Instructions",
        validate: validateInput,
    },
    //For user to select their licsense
    {
        type:"list",
        name:"pageLicsense",
        message:"Select the licsense your project Used",
        choices:[
            "MIT",
            "Apache 2.0",
            "GPLv2",
            "GPLv3",
            "Mozilla Public 2.0",
            "LGPLv3",
            "AGPLv3",
        ],
        validate: validateInput,
    },
    //For user to enter contributers
    {
        type:"input",
        name:"pageContributers",
        message:"Enter all the users who contributed to this project",
        validate: validateInput,
    },
    //For Users to enter any testing they have done on their page
    {
        type:"input",
        name:"pageTesting",
        message:"Enter any testing that has been done on your page.",
        validate: validateInput,
    },
    //For users to enter their Email
    {
        type:"input",
        name:"pageEmail",
        message:"Enter your Email",
        validate: validateInput,
    },
    //For users to enter their GitHub profile.
    {
        tpye:"input",
        name:"pageGitHub",
        message:"Enter your GitHub profile name.",
        validate: validateInput,
    }


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) throw (err);

        console.log("success!");
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile("genREADME.md", markdownContent);
        console.log("README.md file successfully generated!");
    }).catch((err) => {
        console.error("Error occurred:", err);
    });
}

// Function call to initialize app
init();