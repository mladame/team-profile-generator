const Employee = require("./Employee");

// Manager class constructor
class Manager extends Employee {

    // required properties for manager: office(number), role = "Manager"
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // functions return office number and role values
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber
    }
    
}

module.exports = Manager;