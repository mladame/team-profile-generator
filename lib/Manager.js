

class Manager {

    constructor(name, id, email, office) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.role = role;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getOffice(){
        return this.office
    }
    getRole(){
        console.log(this.role);
    }
}

module.exports = Manager;