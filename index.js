// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address (mail to)
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const manager = require("./lib/Manager");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

// define to generate html
const generateHTML = require("./src/generateHTML");

// make array for team members info

// ! VALIDATE INPUT
// email opens up defaul email app
//* Setup function to add manager constructor FIRST
//      questions will be input
//?      .then send data to manager.js and build file or push to array first?

const projectManager = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your managers name?"
    },
    {
        type: "input",
        name: "id",
        message: "What the manager's employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your managers email address?"
    },
    {
        type: "input",
        name: "office",
        message: "What is your managers office number?"
    },
    // maybe separate??
    {
        type: "confirm",
        name: "newEmpConf",
        message: "Would you like to add a new employee?"
    }
])
.then(data => {
    // data push to array, map/filter data first?
})};



// then prompted to add employee
//  list of employee types: intern, engineer
// loop this prompt in a while loop "while this is happening start from the beginning"
// use push, map, filter, join, all info comes back as an object, we put that into an array
// filter.map push to intern, filter.map push to... then join them all together
//* SETUP function to add employee constructor:
//      intial question: list; choices: ['engineer', 'intern']
//      if intern, then run intern questions
//      if engineer, then run engineer questions
//      else stop loop
//      send data to array, push 

// engineer:
// name, ID, email, and GitHub username
// email opens up defaul email app
// github username is used to creat a link to github profile

// intern:
// name, ID, email, and school
// email opens up defaul email app
// *make into function, use .then
const addEmployee = () => {
    return inquirer.prompt([
    {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: ['engineer', 'intern']
    },
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?"
    }])

    // if (choices === "engineer") {
    //     // run engineer questions
    // }
    // if (choices === "intern") {
    //     // run intern questions
    // } else {
    //     // dont add employee, stop questions, next questions
    // }
.than(data => {
    // push employee data to array
})
};

// * SETUP function to generate html