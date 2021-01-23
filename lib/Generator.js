const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const managerArray = [];
const engineerArray = [];
const internArray = [];

class Generator {
    // constructor() {
        // this.manager = [];
        // this.engineer = [];
        // this.intern = [];
    // }
    initializeGenerator() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the Employess role?',
                choices: ['Engineer', 'Intern', 'Manager']
            }])
            .then(({ role }) => {
                switch (role) {
                    case 'Manager':
                        this.managerGenerator();
                        break;
                    
                    case 'Enginner':
                        this.engineerGenerator();
                        break;

                    case 'Intern':
                        this.internGenerator();
                        break;

                    default:
                        break;
                }
            });
    };

    managerGenerator() {
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
                managerArray.push(manager);
            })
            .then(() => {
                this.addEmployee();
            });
    };

    engineerGenerator() {

    };

    internGenerator() {

    };

    addEmployee() {
        inquirer.prompt([
            {   
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another Employee?',
                default: false
            }
        ])
        .then(({ confirmAddEmployee }) => {
            if (!confirmAddEmployee) {
                return;
            }
            else {
                this.initializeGenerator();
            }
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