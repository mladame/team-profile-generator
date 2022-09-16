// TODO: Intern parent class with the following:
// * school, getSchool(), getRole() - overriden to return "Intern"

class Intern {

    constructor(school, role) {
        this.school = school;
        this.role = role
    }

    getSchool() {
        console.log(this.school);
    }
    getRole(){
        console.log(this.role);
    }
}

module.exports = Intern;