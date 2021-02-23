const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classEmployee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        return ('Intern');

    }
}

const intern = new Intern(inquirer.name, inquirer.id, inquirer.email, inquirer.role, inquirer.school);
