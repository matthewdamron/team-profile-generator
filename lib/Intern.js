const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    };

    // get intern role
    getRole() {
        this.role = 'Intern';
        return this.role;
    };

    // get intern githun username
    getSchool() {
        return this.school;
    };
};

module.exports = Intern;