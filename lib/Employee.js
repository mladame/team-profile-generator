// TODO: Employee parent class with the following properties and methods:
//* name, id, email; getName(), getId(), getEmail(), getRole()-returns "Employee"

// Employee class constructor
class Employee {

    // required properties for new employee: name, id, email, role = "Employee"
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
        return this.role;
    }
}

module.exports = Employee;