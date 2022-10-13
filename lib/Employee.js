// Employee class constructor
class Employee {

    // required properties for new employee: name, id, email, role = "Employee"
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // functions return set values
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
        return "Employee";
    }
}

module.exports = Employee;