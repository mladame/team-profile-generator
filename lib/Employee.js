// TODO: Employee parent class with the following properties and methods:
//* name, id, email; getName(), getId(), getEmail(), getRole()-returns "Employee"
//! ADD VALIDATIONS

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    getRole(){
        console.log(this.role);
    }
}

module.exports = Employee;