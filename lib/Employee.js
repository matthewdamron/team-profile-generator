class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // get employee name
    getName() {
        return this.name;
    };

    // get employee id
    getId() {
        return this.id;
    };

    // get employee email
    getEmail() {
        return this.email;
    };

    // get employee role
    getRole() {
        this.role = 'Employee';
        return this.role;
    };
};

module.exports = Employee;