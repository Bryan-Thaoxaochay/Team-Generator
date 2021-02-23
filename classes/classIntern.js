const inquirer = require('inquirer');
const Employee = require('./classEmployee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {

    }

    getRole() {
        return ('Intern');

    }
}

const intern = new Intern(inquirer.name, inquirer.id, inquirer.email, inquirer.role, inquirer.school);
