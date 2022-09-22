// Employee class constructor
class Employee {

    // required properties for new employee: employeeName, employeeId, employeeEmail, role = "Employee"
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeEmail = employeeEmail;
    }

    // functions return set values
    getName() {
        return this.employeeName;
    }
    getId() {
        return this.employeeId;
    }
    getEmail(){
        return this.employeeEmail;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;