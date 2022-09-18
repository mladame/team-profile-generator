// TODO: Intern parent class with the following:
// * school, getSchool(), getRole() - overriden to return "Intern"

const Employee = require("./Employee");

// intern class constructor
class Intern extends Employee {

    // properties of intern: school, role = "Intern"
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // functions return data for intern
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;