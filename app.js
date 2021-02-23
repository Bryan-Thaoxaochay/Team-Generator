const Manager = require('./classes/classManager.js');
const Engineer = require('./classes/classEngineer.js');
const Intern = require('./classes/classIntern.js');

const inquirer = require('inquirer');

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

        if(!responses.addMember) {
            console.log("No member(s) added")
        } else {
            console.log("Member(s) added")
        }

        // Gotta make questions repeat
        
        if (responses.role === 'Manager') {
            let role = responses.role;
            let officeNumber = responses.officeNumber;
            let name = responses.name;
            let id = responses.id;
            let email = responses.email;

            manager = new Manager(name, id, email, role, officeNumber);
            console.log(manager);

            // Creating figure that will contain the info
            let figure = document.createElement("figure");
            const container = document.getElementsByClassName("container");
            container.appendChild(figure);
            figure.classList.add("card text-white bg-primary");
            figure.style.width = "8rem";
            figure.style.cssText = "display: inline-block; font-size: medium; text-align: center; margin: 10px";

            // Creating header
            let h2El = document.createElement("h2");
            let h2 = h2El.appendChild(name);
            figure.appendChild(h2);

            // Unable to manipulate DOM in node.js because this isn't a browser



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

        // fs.writeFile("README.md", README, (err) =>
        //     err ? console.error(err) : console.log("MD Created")
        // );

    }) // Then

    module.exports = inquirer;