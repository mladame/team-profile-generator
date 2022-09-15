// TODO: Intern parent class with the following:
// * school, getSchool(), getRole() - overriden to return "Intern"
//! ADD VALIDATIONS

// set school via constructor, get role returns "Intern", get school name via getSchool()
// function intern(school) {

//     // getSchool() = function() {
//     // return this.school = ${data.school}        
//     // }

//     function getSchool(school) {
//         return this.school = ${school}
//     }
// }

class Item {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

module.exports = Item;