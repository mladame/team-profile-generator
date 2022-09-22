const Employee = require("./Employee");

// intern class constructor
class Intern extends Employee {

    // properties of intern: internSchool, role = "Intern"
    constructor(employeeName, employeeId, employeeEmail, internSchool) {
        super(employeeName, employeeId, employeeEmail);
        this.internSchool = internSchool;
    }

    // functions return data for intern
    getSchool() {
        return this.internSchool;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;