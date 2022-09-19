// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address (mail to)
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateHTML = require("./dist/generateHTML");
// const { profile } = require("console");
// const { resolve4 } = require("dns/promises");

// array for team members info
const teamMembers = [];
const teamMemberInfo = JSON.stringify(teamMembers)

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
        choices: ['Engineer', 'Intern']
    },
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the employee name');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee ID.');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false; 
            }
        }
    }];

// Ask user for manager info
const askManager = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the manager.');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the manager ID.');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false; 
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        validate: onInput => {
            if (onInput) {
                return true;
            } else {
                console.log('Please enter the office number.');
                return false; 
            }
        }
}];

// Ask user for Engineer info
const askEngineer = [
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's Github username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a Github username.');
                return false; 
            }
        }
    }
];

// Ask user for Intern info
const askIntern = [
    {
        type: "input",
        name: "school",
        message: "What is the name of this Intern's school?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school name.');
                return false; 
            }
        }
    }
];

// write new html file
function writeToFile(data){ 
    const teamInfo = JSON.stringify(data);
    fs.writeFile('./dist/team-profile.html', teamInfo, err =>
    err ? console.log(err) : console.log('Team Profile successfully generated! Check dist folder for html and css files.'))
}

// ask if user would like to add new employee
// function confirmEmp() {return inquirer.prompt(confirmNewEmp);}

//  returns user input
// function mInfo() {return inquirer.prompt(askManager)}

// function newEmp() {return inquirer.prompt(addEmployee)};

// function eInfo() {return inquirer.prompt(askEngineer)};

// function iInfo() {return inquirer.prompt(askIntern)};

// function to build team
function buildTeam() {

    inquirer.prompt(addEmployee)
    .then(data => {
    const  { name, id, email, role } = data;
    const employee = new Employee (name, id, email, role);
    if(role === "Engineer"){
        inquirer.prompt(askEngineer)
    .then(data => {
        const { github } = data;
        const engineer = new Engineer (github);
        const teamEngineer = {...employee, ...engineer};
        teamMembers.push(teamEngineer);
        console.log(teamMembers);
    })
    // .then(data => {roundabout()})
    } else {
        inquirer.prompt(askIntern)
    .then(data => {
        const { school } = data;
        const intern = new Intern (school);
        const teamIntern = {...employee, ...intern};
        teamMembers.push(teamIntern);
    })
    // .then(data => {roundabout()})
    }
    })
    
}
// function to loop questions
function roundabout() {
    inquirer.prompt(confirmNewEmp)
    .then(val => { 
        // if(true){
        //     buildTeam();
        // } 
    true ? buildTeam() : generateHTML(data);
    })
    .then(data => {
        writeToFile(data);
    })
    .catch(err => {
        console.log(err);
    });
    // .then(console.log("Building Profile..."))
}

// call function to intialize app


// .then(data => {
//     return generateHTML(data);
// })


function initTeam() {

    inquirer.prompt(askManager)
    .then(data => {
    
    // define data for manager
    const  { name, id, email, officeNumber } = data; 
    const manager = new Manager (officeNumber);
    const employee = new Employee (name, id, email);
    const teamManager = { ...employee, ...manager};
    teamMembers.push(teamManager);

    // call function to start building team
    buildTeam()
    })
    .then(data => {roundabout()})
}
initTeam()