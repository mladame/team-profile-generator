// Manager class constructor
class Manager {

    // required properties for manager: office(number), role = "Manager"
    constructor(officeNumber) {
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