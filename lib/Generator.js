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
            },
            {
                type: 'text',
                name: 'employeeName',
                message: `What is the Employees name?`
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
            }])
            .then((answers) => {
                switch (answers.role) {
                    case 'Manager':
                        this.managerGenerator(answers);
                        break;
                    
                    case 'Engineer':
                        this.engineerGenerator(answers);
                        break;

                    case 'Intern':
                        this.internGenerator(answers);
                        break;

                    default:
                        break;
                }
            });
    };

    managerGenerator(answers) {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'officeNumber',
                message: 'What is your office number?'
            }])
            .then(({ officeNumber }) => {
                let manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, officeNumber);
                managerArray.push(manager);
            })
            .then(() => {
                console.table(managerArray);
                this.addEmployee();
            });
    };

    engineerGenerator(answers) {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'github',
                message: 'What is your github username?'
            }])
            .then(({ github }) => {
                let engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, github);
                engineerArray.push(engineer);
            })
            .then(() => {
                console.table(engineerArray);
                this.addEmployee();
            });
    };

    internGenerator(answers) {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'school',
                message: 'What is the name of your school?'
            }])
            .then(({ school }) => {
                let intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, school);
                internArray.push(intern);
            })
            .then(() => {
                console.table(internArray);
                this.addEmployee();
            });
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