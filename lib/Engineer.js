// TODO: Engineer parent class with the following properties and methods:
// * github, getGithub(), getRole()-overridden to return "Engineer"

// engineer class constructor
class Engineer {

    // engineer properties required: github, role = "Engineer"
    constructor(github, role) {
        this.github = github;
        this.role = role
    }

    // functions return values
    getGithub() {
        return this.github;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;