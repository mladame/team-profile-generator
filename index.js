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

// const manager = require("./lib/Manager");
// const employee = require("./lib/Employee");
// const engineer = require("./lib/Engineer");
// const intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

// define to generate html
// const generateHTML = require("./src/generateHTML");

// array for team members info
const teamMembers = [];

// ! VALIDATE INPUT
//* Setup function to add manager constructor FIRST
// questions arrays
// Ask user for manager info
const askManager = [
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
    }];

// Ask user if they would like to add a new employe
const confirmNewEmp = [
        {
            type: "confirm",
            name: "choice",
            message: "Would you like to add a new Employee?"
        }];

// Ask user for employee info
const addEmployee = [
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
    }];

// Ask user for Engineer info
const askEngineer = [
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's Github username?"
    }
];

// Ask user for Intern info
const askIntern = [
    {
        type: "input",
        name: "school",
        message: "What is the name of this Intern's school?"
    }
];


// email opens up defaul email app
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

//* prompt askManager() first, push input data to teamMemebers[],
//*     prompt confirmNewEmp, if val.choice then addEmployee(), otherwise quit
//*         prompt addEmployee(), push input data to teamMemebers[], 

// TODO create function to generate team profile html

function writeToFile(data){
    fs.writeFile('./dist/team-profile.html', data, err =>
    err ? console.log(err) : console.log('Team Profile successfully generated! Check dist folder for html and css files.'))
}

// TODO create function to intialize app

function init() {
    // askManager, push data to array
    teamMembers.push(inquirer.prompt(askManager));
    console.log(teamMembers);
    // console.log(data)
    
    // confirm new employee, if yes, addemployee functions, push data to array; else, quit and generate profile

        //     if (val.choice) {
    //         addEmployee();
    //     } else {
    //         this.quit();
    //     }
}

// TODO call function to intialize app
init()
.then(data => {
    console.log(data);
});

// .then(data => {
//     return writeToFile(data);
// })
// .catch(err => {
//     console.log(err);
// });

// .then(data => {
    // data push to array, map/filter data first?, write file generateHTML once array is full, call confirmNewEmp
// })};


    // .then(val => {
    //     // If the user says yes, add a new employee prompt, otherwise quit 
    //     if (val.choice) {
    //         addEmployee();
    //     } else {
    //         this.quit();
    //     }
    // });

//     if (choices === "engineer") {
//         // run engineer questions
//     }
//     if (choices === "intern") {
//         // run intern questions
//     }
    
// .then(data => {
//     // push employee data to array
// })
// };

// * SETUP function to generate html