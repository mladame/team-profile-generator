// Manager class constructor
class Manager {

    // required properties for manager: office(number), role = "Manager"
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    // functions return office number and role values
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    
}

module.exports = Manager;