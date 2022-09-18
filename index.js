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
const generateHTML = require("./dist/generateHTML");
// const { resolve4 } = require("dns/promises");

// array for team members info
const teamMembers = [];

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
// write new html file
function writeToFile(data){
    fs.writeFile('./dist/team-profile.html', teamMembers, err =>
    err ? console.log(err) : console.log('Team Profile successfully generated! Check dist folder for html and css files.'))
}

// ask if user would like to add new employee
function confirmEmp() {return inquirer.prompt(confirmNewEmp);}

//  returns user input
function initTeam() {return inquirer.prompt(askManager)}

function newEmp() {return inquirer.prompt(addEmployee)};

function eInfo() {return inquirer.prompt(askEngineer)};

function iInfo() {return inquirer.prompt(askIntern)};

function buildTeam(data) {

    // return employee info
    newEmp()
    .then(data => {
    const  { name, id, email, role } = data;
    const employee = new Employee (name, id, email, role);
    if(role === "Engineer"){
    eInfo()
    .then(data => {
        const { github } = data;
        const engineer = new Engineer (github, role);
        const teamEngineer = {...employee, ...engineer};
        teamMembers.push(teamEngineer);
        console.log(teamMembers);
    })
    } else {
    iInfo()
    .then(data => {
        const { school } = data;
        const intern = new Intern (school, role);
        const teamIntern = {...employee, ...intern};
        teamMembers.push(teamIntern);
    })
    }
    
    })
    
}

function roundabout() {
    confirmEmp()
    .then(data => {
        if (true) {
            buildTeam();
        } 
    })
}

// call function to intialize app
initTeam()
.then(data => {
    // console.log(data);
    const  { name, id, email, officeNumber, role } = data; 
    const manager = new Manager (officeNumber, role);
    const employee = new Employee (name, id, email);
    const teamManager = { ...employee, ...manager};
    teamMembers.push(teamManager);
    // console.log(teamMembers);


})
.then(data => {
    buildTeam()
})


    // confirmEmp()
    // .then(data => {
    // if (false) {
    //         // quit and render html
    //     } else {}
    // })






        


    //todo make if loop for next question
    // if(role === "Manager"){
    //     mInfo()
    //     .then(data => {
    //         const { officeNumber } = data;
    //         const manager = new Manager (officeNumber, role);
    //         const teamManager = employee.concat(manager);
    //         teamMembers.push(teamManager);
    //         console.log(teamMembers);
    //     })
    // } else 



    

    //* setup function
    // add m/e/i info(custom, role) and employee info(name, id, email), 
    // set to m/e/i 
    // push to teamMembers for each new employee
    
    //todo make output data for selected role using map ex. new manager = teamMembers.map
    //todo send "manager" to new array
    //todo build file from final array    

    // askManager, push data to array
    //todo add in function to sort through info before pushing manager, engineer, intern 
    // teamMembers.push(employee);
    // console.log(teamMembers);



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


