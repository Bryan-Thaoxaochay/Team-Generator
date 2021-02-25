// Local Files
const Manager = require('./classes/classManager.js');
const Engineer = require('./classes/classEngineer.js');
const Intern = require('./classes/classIntern.js');

// Modules
const inquirer = require('inquirer');

let inquirerPrompts = function prompts() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addMember',
                message: 'Do you want to add a team member?',
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the team members full name? (i.e. Bryan Thaoxaochay)',
                when: (responses) => responses.addMember === true
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID?',
                when: (responses) => responses.addMember === true
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?',
                when: (responses) => responses.addMember === true
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is their role?',
                choices: ['Manager', 'Engineer', 'Intern'],
                when: (responses) => responses.addMember === true
            },
            {
                type: 'input', 
                name: 'officeNumber', 
                message: 'What is their office number?',
                when: (responses) => responses.role === 'Manager'
            },
            {
                type: 'input', 
                name: 'github', 
                message: 'What is their GitHub username?',
                when: (responses) => responses.role === 'Engineer'
            },
            {
                type: 'input', 
                name: 'school', 
                message: 'What undergraduate school did they go to?',
                when: (responses) => responses.role === 'Intern'
            },
            {
                type: 'confirm',
                name: 'anotherMember',
                message: 'Do you want to add another team member?',
                when: (responses) => responses.addMember === true
            }
        ]) // Inquirer

        .then((responses) => {
            
            // Ending response
            if(!responses.addMember) {
                console.log("No member(s) added")
            } else {
                console.log("Member(s) added")
            }

            // Trying to define variables in objects, then to push into the HTML            
            if (responses.role === 'Manager') {

                let role = responses.role;
                let officeNumber = responses.officeNumber;
                let name = responses.name;
                let id = responses.id;
                let email = responses.email;

                manager = new Manager(name, id, email, role, officeNumber);
                console.log(manager);

            } else if (responses.role === 'Engineer') {

                let role = responses.role;
                let github = responses.github;
                let name = responses.name;
                let id = responses.id;
                let email = responses.email;

                engineer = new Engineer(name, id, email, role, github);
                console.log(engineer);

            } else if (responses.role === 'Intern') {

                let name = responses.name;
                let id = responses.id;
                let email = responses.email;
                let role = responses.role;
                let school = responses.school;

                intern = new Intern(name, id, email, role, school);
                console.log(intern);

            } else {
                console.log("Type of member wasn't chosen.");
            };        

            // Getting questions to loop back around if user wants to add another member.
            if(responses.anotherMember){
                prompts();
            } else{
                console.log("No more members are being added.")
            }

        }) // Then
} // Function

// Calling the function
inquirerPrompts();

// Exporting the function
module.exports = inquirerPrompts;