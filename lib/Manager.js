const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
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

    // get manager office number
    getOfficeNumber() {
        return this.officeNumber;
    };
};

module.exports = Manager;