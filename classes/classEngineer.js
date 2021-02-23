const inquirer = require('inquirer');
const Employee = require('./classEmployee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return ('Engineer');
    }
}

const engineer = new Engineer(inquirer.name, inquirer.id, inquirer.email, inquirer.role, inquirer.github);
