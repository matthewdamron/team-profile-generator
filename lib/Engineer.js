const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    };

    // get engineer role
    getRole() {
        return this.role;
    };

    // get engineer githun username
    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;