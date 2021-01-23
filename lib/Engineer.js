const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    };

    // get engineer name
    getName() {
        return this.name;
    };

    // get engineer id
    getId() {
        return this.id;
    };

    // get engineer email
    getEmail() {
        return this.email;
    };

    // get engineer role
    getRole() {
        this.role = 'Engineer';
        return this.role;
    };

    // get engineer githun username
    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;