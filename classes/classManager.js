const fs = require('fs');
const Employee = require('./classEmployee');


class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return ('Manager');
    }
}

module.exports = Manager;