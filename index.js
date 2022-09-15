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

// prompted to enter team managers info
// name, employee ID, email address, and office number
// email opens up defaul email app

// then prompted to add employee
//  list of employee types: intern, engineer
// loop this prompt in a while loop "while this is happening start from the beginning"
// use push, map, filter, join, all info comes back as an object, we put that into an array
// filter.map push to intern, filter.map push to... then join them all together

// engineer:
// name, ID, email, and GitHub username
// email opens up defaul email app
// github username is used to creat a link to github profile

// intern:
// name, ID, email, and school
// email opens up defaul email app
