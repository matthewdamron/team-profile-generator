const Employee = require('./Employee');

class Manager {
    constructor(name, id, email) {
        super(name, id, email);
    };

    // get manager name
    getName() {
        return this.name;
    };

    // get manager id
    getId() {
        return this.id;
    };

    // get manager email
    getEmail() {
        return this.email;
    };

    // get manager role
    getRole() {
        this.role = 'Manager';
        return this.role;
    };
}

module.exports = Manager;