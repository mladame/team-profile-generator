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

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

// define to generate html
// const generateHTML = require("./src/generateHTML");

// array for team members info
const teamMembers = [];

// ! VALIDATE INPUT
// validate: (Function) Receive the user input and answers hash. Should return true if the value is valid, and an error message (String) otherwise. If false is returned, a default error message is provided.
//* Setup function to add manager constructor FIRST
// questions arrays


// Ask user if they would like to add a new employe
const confirmNewEmp = [
        {
            type: "confirm",
            name: "add",
            message: "Would you like to add a new Employee?"
        }];

// Ask user for employee info
const addEmployee = [
    {
        type: "list",
        name: "role",
        message: "What type of employee would you like to add?",
        choices: ['Manager', 'Engineer', 'Intern']
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

// Ask user for manager info
const askManager = [
    {
        type: "input",
        name: "office",
        message: "What is this manager's office number?"
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
//  ask user for manager info
function initTeam() {
    return inquirer.prompt(addEmployee)
    
}

// ask if user would like to add new employee
function confirmEmp() {
    return inquirer.prompt(confirmNewEmp);
} 




// TODO call function to intialize app
initTeam()
.then(data => {
    console.log(data);

    // need array deconstructor (manager(name, id, email, office)), need to be able to make new manager
    const role = "Employee";
    const  { name, id, email } = data; 
    const employee = new Employee (name, id, email, role);

    // askManager, push data to array
    teamMembers.push(employee);
    console.log(teamMembers);

    // ask to add new employee
    // confirmEmp()
    // .then(data => {
    // if (false) {
            // quit
    //     } else {
    //         return inquirer.prompt(addEmployee);
    //     }
    // })
    // .then(data => {
        // need array deconstructor (manager(name, id, email, office)), need to be able to make new manager
        // const  { name, id, email } = addEmployee; 
        // const employee = new Employee (name, id, email, role);

        // askManager, push data to array
    //     teamMembers.push(x);
    //     console.log(teamMembers);
    // })
})

    // // need array deconstructor (manager(name, id, email, office)), need to be able to make new manager
    // const  { name, id, email, office } = askManager; 
    // const manager = new Manager (name, id, email, office);

    // // askManager, push data to array
    // teamMembers.push(manager);
    // console.log(teamMembers);
    // console.log(data)
    
    // confirm new employee, if yes, addemployee functions, push data to array; else, quit and generate profile

        //     if (val.choice) {
    //         addEmployee();
    //     } else {
    //         this.quit();
    //     }

// .then(data => {
//     return writeToFile(data);node n
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