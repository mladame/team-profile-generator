// TODO: Intern parent class with the following:
// * school, getSchool(), getRole() - overriden to return "Intern"
//! ADD VALIDATIONS

// set school via constructor, get role returns "Intern", get school name via getSchool()
// function intern(school) {

//     // getSchool() = function() {
//     // return this.school = ${data.school}        
//     // }

    function intern(school, role) {
        this.school = school;
        this.role = role;
        this.getSchool = function() {
            return this.school;
        }
        this.getRole = function() {
            return this.role
        }
    }


// class Intern {

//     constructor(school, role) {
//         this.school = school;
//         this.role = role
//     }

    
// }

// module.exports = Intern;