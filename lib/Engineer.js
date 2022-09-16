// TODO: Engineer parent class with the following properties and methods:
// * github, getGithub(), getRole()-overridden to return "Engineer"
//! ADD VALIDATIONS

function engineer(github, role) {
    this.github = github;
    this.role = role;
    this.getGithub = function() {
        return this.github;
    }
    this.getRole = function() {
        return this.role
    }

    console.log(this.github);
    console.log(this.role);
}