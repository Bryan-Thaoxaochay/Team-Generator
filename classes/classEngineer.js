const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./classEmployee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        return ('Engineer');
    }
}

