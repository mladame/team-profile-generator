const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");

// array for team members info
const teamMembers = [];

//* ADD MANAGER--------------------------------------------------------------------
const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter the managers name.'; 
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID number?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter the manager ID.'; 
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter an email address.'; 
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter the office number.'; 
            }
        },
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add a new Employee?",
            choices: ['Engineer', 'Intern', 'No More Employees']
        }
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name, 
            answers.id,
            answers.email,
            answers.officeNumber,
        );
        teamMembers.push(manager);

        if(answers.addEmployee == "Engineer") {
            addEngineer()
        } else if (answers.addEmployee == "Intern") {
            addIntern()
        } else {
            writeToFile();
        }
    })
};

//* ADD ENGINEER---------------------------------------------------------------------
function addEngineer() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter the employee name.'; 
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's ID number?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter the employee ID.'; 
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter an email address.'; 
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is this Engineer's Github username?",
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add a new Employee?",
        choices: ['Engineer', 'Intern', 'No More Employees']
    }
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.name, 
            answers.id,
            answers.email,
            answers.github
        );

        teamMembers.push(engineer);
        
        if(answers.addEmployee == "Engineer") {
            addEngineer()
        } else if (answers.addEmployee == "Intern") {
            addIntern()
        } else {
            writeToFile();
        }
    })
};
        
//* ADD INTERN------------------------------------------------------------------- 
function addIntern() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter the employee name.'; 
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is this employee's ID number?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter the employee ID.'; 
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is this employee's email?",
        validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter an email address.'; 
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of this Intern's school?",
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add a new Employee?",
        choices: ['Engineer', 'Intern', 'No More Employees']
    }
    ])
    .then((answers) => {
        const intern = new Intern(
            answers.name, 
            answers.id,
            answers.email,
            answers.school
        );

        teamMembers.push(intern);
        
        if(answers.addEmployee == "Engineer") {
            addEngineer()
        } else if (answers.addEmployee == "Intern") {
            addIntern()
        } else {
            writeToFile();
        }
    })
};

function writeToFile(){
    fs.writeFile('./dist/team-profile.html', generateHTML(teamMembers), (err) =>
    err ? console.log(err) : console.log('Team Profile successfully generated! Check dist folder for html and css files.'))
    }

addManager()

module.exports = teamMembers;