

    function Manager(name, id, email, office) {
        this.school = school;
        this.role = role;
        this.getSchool = function() {
            return this.school;
        }
        this.getRole = function() {
            return this.role
        }

        console.log(this.school);
        console.log(this.role);
    }