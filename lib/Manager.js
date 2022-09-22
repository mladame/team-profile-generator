// Manager class constructor
class Manager {

    // required properties for manager: office(number), role = "Manager"
    constructor(managerName, managerId, managerEmail, managerOfficeNumber) {
        this.managerName = managerName;
        this.managerId = managerId;
        this.managerEmail = managerEmail;
        this.managerOfficeNumber = managerOfficeNumber;
    }

    // functions return office number and role values
    getName() {
        return this.managerName;
    }
    getId() {
        return this.managerId;
    }
    getEmail(){
        return this.managerEmail;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.managerOfficeNumber
    }
    
}

module.exports = Manager;