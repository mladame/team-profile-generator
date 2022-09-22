const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const dist_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(dist_DIR, "team-profile.html");
const generateHTML = require("./dist/generateHTML");

// array for team members info
const teamMembers = [];
const idArray = [];
const teamMembersInfo = JSON.stringify(teamMembers);

// Ask user if they would like to add a new employe
function confirmEmp() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add a new Employee?"
        }
    ])
    .then((answers) => {
        if(true){
            buildTeam();
        }
        generateHTML(data);
    })
};



// Ask user for manager info
function app() {

    // Prompt user to enter manager info -- calls buildTeam()
        function askManager() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
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
                    name: "managerId",
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
                    name: "managerEmail",
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
                    name: "managerOfficeNumber",
                    message: "What is the manager's office number?",
                    validate: answer => {
                        if (answer !== '') {
                            return true;
                        }
                        return 'Please enter the office number.'; 
                    }
                },
            ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName, 
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                idArray.push(answers.managerId);
                buildTeam()
            })
        }

    // build team, get employee info -- calls askEngineer() or askIntern() based on selection
        function buildTeam() {
            inquirer.prompt([
            {
                type: "list",
                name: "employeeRole",
                message: "What type of employee would you like to add?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: "input",
                name: "employeeName",
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
                name: "employeeId",
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
                name: "employeeEmail",
                message: "What is this employee's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter an email address.'; 
                }
            },
            ])
            .then((answers) => {
                const employee = new Employee(
                    answers.employeeName, 
                    answers.employeeId,
                    answers.employeeEmail,
                    answers.employeeOfficeNumber
                );
                teamMembers.push(employee);
                idArray.push(answers.employeeId);
                if(answers.employeeRole == "Engineer") {
                    askEngineer()
                } else {askIntern()}
            })
        };
        
    // Get engineer info - calls confirmEmp()
        function askEngineer() {
            inquirer.prompt([
            {
                type: "input",
                name: "engineerGithub",
                message: "What is this Engineer's Github username?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter a Github username.'; 
                }
            }
            ])
            .then((answers) => {
                const engineer = new Engineer (answers.engineerGithub);
                teamMembers.push(engineer);
                idArray.push(answers.employeeId);
                // confirmEmp()
            })
        };

    // Get intern info - calls confirmEmp()
        function askIntern() {
            inquirer.prompt([
            {
                type: "input",
                name: "internSchool",
                message: "What is the name of this Intern's school?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter a school name.'; 
                }
            }
            ])
            .then((answers) => {
                const intern = new Intern (answers.internSchool);
                teamMembers.push(intern);
                idArray.push(answers.employeeId);
                confirmEmp()
            })
        };

    askManager()
}
app()







// function initTeam() {

//     inquirer.prompt(askManager)
//     .then(data => {
    
//     // call manager/employee functions
//     const  { name, id, email, officeNumber } = data; 
//     const manager = new Manager (officeNumber);
//     const employee = new Employee (name, id, email);
//     const teamManager = { ...employee, ...manager};
//     teamMembers.push(teamManager);

//     // call function to start building team
//     buildTeam()
//     })
// }

// // function to build team
// function buildTeam() {

//     // start questions for employee info
//     inquirer.prompt(addEmployee)
//     .then(data => {
//         // call employee
//     const  { name, id, email, role } = data;
//     const employee = new Employee (name, id, email, role);
//     // ask questions for engineer
//     if(role === "Engineer"){
//         inquirer.prompt(askEngineer)
//     .then(data => {
//         const { github } = data;
//         const engineer = new Engineer (github);
//         const teamEngineer = {...employee, ...engineer};
//         teamMembers.push(teamEngineer);
//         console.log(teamMembers);
//     })
//     .then(data => {roundabout()})
//     // ask questions for intern
//     } else {
//         inquirer.prompt(askIntern)
//     .then(data => {
//         const { school } = data;
//         const intern = new Intern (school);
//         const teamIntern = {...employee, ...intern};
//         teamMembers.push(teamIntern);
//     })
//     .then(data => {roundabout()})
//     }
//     })
    
// }
// function to loop questions
// function roundabout() {
//     inquirer.prompt(confirmNewEmp)
//     .then(val => { 
//         if(val){
//             buildTeam();
//         } else {
//         generateHTML(data);
//         }
//     })
// }

// write new html file
// function writeHTML(){ 
//     fs.writeFileSync(distPath, initTeam(teamMembersInfo), "UTF-8")
//     console.log('Team Profile successfully generated! Check dist folder for html and css files.')
// }



// initTeam()
// .then(data => {
//     writeHTML();
// })
// .catch(err => {
//     console.log(err);
// });

// ask manager questions
// {
        //     type: "input",
        //     name: "id",
        //     message: "What is the manager's ID number?",
        //     validate: idInput => {
        //         if (idInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter the manager ID.');
        //             return false; 
        //         }
        //     },
        // },
        // {
        //     type: "input",
        //     name: "email",
        //     message: "What is the manager's email?",
        //     validate: emailInput => {
        //         if (emailInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter an email address.');
        //             return false; 
        //         }
        //     }
        // },
        // {
        //     type: "input",
        //     name: "officeNumber",
        //     message: "What is the manager's office number?",
        //     validate: onInput => {
        //         if (onInput) {
        //             return true;
        //         } else {
        //             console.log('Please enter the office number.');
        //             return false; 
        //         }
        //     }
        // }