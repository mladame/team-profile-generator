// TODO: Engineer parent class with the following properties and methods:
// * github, getGithub(), getRole()-overridden to return "Engineer"

class Engineer {

    constructor(github, role) {
        this.github = github;
        this.role = role
    }

    getGithub() {
        console.log(this.github);
    }
    getRole(){
        console.log(this.role);
    }
}

module.exports = Engineer;