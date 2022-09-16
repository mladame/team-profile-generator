// TODO: Intern parent class with the following:
// * school, getSchool(), getRole() - overriden to return "Intern"

// intern class constructor
class Intern {

    // properties of intern: school, role = "Intern"
    constructor(school, role) {
        this.school = school;
        this.role = role
    }

    // functions return data for intern
    getSchool() {
        return this.school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;