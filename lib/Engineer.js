// TODO: Engineer parent class with the following properties and methods:
// * github, getGithub(), getRole()-overridden to return "Engineer"

const Employee = require("./Employee");

// engineer class constructor
class Engineer extends Employee{

    // engineer properties required: github, role = "Engineer"
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // functions return values
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;