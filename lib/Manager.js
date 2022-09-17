// Manager class constructor
class Manager {

    // required properties for manager: office(number), role = "Manager"
    constructor(office, role) {
        this.office = office;
        this.role = role;
    }

    // functions return office number and role values
    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.office
    }
    
}

module.exports = Manager;