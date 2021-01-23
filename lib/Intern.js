const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    };

    // get intern role
    getRole() {
        return this.role;
    };

    // get intern githun username
    getSchool() {
        return this.school;
    };
};

module.exports = Intern;