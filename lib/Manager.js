// Manager class constructor
class Manager {

    // required properties for manager: office(number), role = "Manager"
    constructor(office, role) {
        this.office = office;
        this.role = role;
    }

    // functions return office number and role values
    getOffice(){
        return this.office
    }
    getRole(){
        console.log(this.role);
    }
    
}

module.exports = Manager;