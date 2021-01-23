const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Generator {
    // constructor() {
        // this.manager = [];
        // this.engineer = [];
        // this.intern = [];
    // }
    initializeGenerator() {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'managerName',
                message: `What is the Team Manager's name?`
                // valadate: valadateQuestion
            },
            {
                type: 'text',
                name: 'employeeId',
                message: 'What is your Employee id?'
            },
            {
                type: 'text',
                name: 'employeeEmail',
                message: 'What is your email?'
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: 'What is your office number?'
            }])
            .then(({ managerName, employeeId, employeeEmail, officeNumber }) => {
                let manager = new Manager(managerName, employeeId, employeeEmail, officeNumber);
                console.log(manager.getName());
                console.table(manager);
            })
    };
    // valadateQuestion(input) {
    //     if (input === 'yes') {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
};

module.exports = Generator;