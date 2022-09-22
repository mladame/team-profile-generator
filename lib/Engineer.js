const Employee = require("./Employee");

// engineer class constructor
class Engineer extends Employee{

    // engineer properties required: engineerGithub, role = "Engineer"
    constructor(employeeName, employeeId, employeeEmail, engineerGithub) {
        super(employeeName, employeeId, employeeEmail);
        this.engineerGithub = engineerGithub;
    }

    // functions return values
    getGithub() {
        return this.engineerGithub;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;