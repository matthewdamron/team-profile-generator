const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generatePage = require('../src/page-template');
const { writeFile, copyFile } = require('./generate-site');

class Generator {
    constructor() {
        this.employeeArray = [];
    }
    initializeGenerator() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the Employess role?',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'text',
                name: 'employeeName',
                message: 'What is the Employees name?',
                validate: this.validate
            },
            {
                type: 'text',
                name: 'employeeId',
                message: 'What is your Employee id?',
                validate: employeeIdInput => {
                    if (employeeIdInput){
                        if (this.employeeArray.length === 0) {
                            return true;
                        }
                        else {
                            if (this.employeeArray.some(e => e.id === employeeIdInput)) {
                                console.log('\n Employee ID is in use already please try again!');
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'employeeEmail',
                message: 'What is your email?',
                validate: employeeEmailInput => {
                    // run test to see if input is a email
                    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(employeeEmailInput)
                    if (validEmail) {
                        return true;
                    } else {
                        console.log('\nPlease enter a valid email!');
                        return false;
                    }
                }
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
                message: 'What is your office number?',
                validate: officeNumberInput => {
                    if (officeNumberInput){
                        if (this.employeeArray.length === 0) {
                            return true;
                        }
                        else {
                            if (this.employeeArray.some(e => e.id === officeNumberInput)) {
                                console.log('\n Office Number is in use already please try again!');
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                    }
                    else {
                        return false;
                    }
                }
            }])
            .then(({ officeNumber }) => {
                let manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, officeNumber);
                this.employeeArray.push(manager);
            })
            .then(() => {
                this.addEmployee();
            });
    };

    engineerGenerator(answers) {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'github',
                message: 'What is your github username?',
                validate: this.validate
            }])
            .then(({ github }) => {
                let engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, github);
                this.employeeArray.push(engineer);
            })
            .then(() => {
                this.addEmployee();
            });
    };

    internGenerator(answers) {
        inquirer
            .prompt([
            {
                type: 'text',
                name: 'school',
                message: 'What is the name of your school?',
                validate: this.validate
            }])
            .then(({ school }) => {
                let intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, school);
                this.employeeArray.push(intern);
            })
            .then(() => {
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
                let teamWebsite = generatePage(this.employeeArray);
                return writeFile(teamWebsite);
            }
            else {
                this.initializeGenerator();
            }
        })
    };

    // function to validate response
    validate = async (validateUserInput) => {
        if (validateUserInput) {
            return true;
        }
        else {
            return false;
        }
    }
};

module.exports = Generator;