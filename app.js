// Local Files
const Manager = require('./classes/classManager.js');
const Engineer = require('./classes/classEngineer.js');
const Intern = require('./classes/classIntern.js');

// Modules
const inquirer = require('inquirer');
const fs = require('fs');
const { data } = require('jquery');

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

                let managerObject = {
                    name: name, role: role, id: id, email: email, officeNumber: officeNumber
                };

                employeeArray.push(managerObject);

                manager = new Manager(name, id, email, role, officeNumber);
                console.log(employeeArray);

            } else if (responses.role === 'Engineer') {

                let role = responses.role;
                let github = responses.github;
                let name = responses.name;
                let id = responses.id;
                let email = responses.email;

                let engineerObject = {
                    name: name, role: role, id: id, email: email, github: github
                };

                employeeArray.push(engineerObject);

                engineer = new Engineer(name, id, email, role, github);
                console.log(employeeArray);

            } else if (responses.role === 'Intern') {

                let name = responses.name;
                let id = responses.id;
                let email = responses.email;
                let role = responses.role;
                let school = responses.school;

                let internObject = {
                    name: name, role: role, id: id, email: email, school: school
                };

                employeeArray.push(internObject);

                intern = new Intern(name, id, email, role, school);
                console.log(employeeArray);

            } else {
                console.log("Type of member wasn't chosen.");
            };        


            // Getting questions to loop back around if user wants to add another member.
            if(responses.anotherMember){
                prompts();
            } else{
                console.log("No more members are being added.")
            }


        }) // First then
        
        .then(() => {
            // Read html file I want info to go to
            const mainPath = './templates/main.html';

            fs.readFile(mainPath, 'utf8', function (error, data) {

                if (error){
                    console.error(error);
                } else {
                    console.log("File read");
                }

                // Generate a string from employeeArray
                for (let i = 0; i < employeeArray.length; i++) {

                    if (employeeArray[i].role === 'Manager') {

                        let strName = String(employeeArray[i].name);
                        let strRole = String(employeeArray[i].role);
                        let strID = String(employeeArray[i].id);
                        let strEmail = String(employeeArray[i].email);
                        let strOfficeNumber = String(employeeArray[i].officeNumber);

                        // Writing to html template
                        fs.readFile('./templates/manager.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            } else {
                                console.log("Manager file read");
                            }
                            
                            let managerResult = data.replace("{{{name}}}", strName).replace("{{{role}}}", strRole).replace("{{{id}}}", strID).replace("{{{email}}}", strEmail).replace("{{{office-number}}}", strOfficeNumber);

                            fs.writeFile('./templates/manager.html', managerResult, 'utf8', (error, data) =>
                            error ? console.error(error) : console.log("Manager file written")
                            )
                        }) // Manager readFile

                        // // Replacing content of main.html
                        // let replacedResult = data.replace("{{{employees}}}", "Manager"); 
                        // // NEED TO REPLACE WITH ONCE WITH ALL TEMPLATES

                        // // Write back to the main.html file
                        // fs.writeFile(mainPath, replacedResult, 'utf8', (error, data) =>
                        // error ? console.error(error) : console.log("Manager file written")
                        // )


                    } else if (employeeArray[i].role === 'Engineer') {

                        let strName = String(employeeArray[i].name);
                        let strRole = String(employeeArray[i].role);
                        let strID = String(employeeArray[i].id);
                        let strEmail = String(employeeArray[i].email);
                        let strGithub = String(employeeArray[i].github);

                        // Writing to html template
                        fs.readFile('./templates/engineer.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            } else {
                                console.log("Engineer file read");
                            }
                            
                            let engineerResult = data.replace("{{{name}}}", strName).replace("{{{role}}}", strRole).replace("{{{id}}}", strID).replace("{{{email}}}", strEmail).replace("{{{github}}}", strGithub);

                            fs.writeFile('./templates/engineer.html', engineerResult, 'utf8', (error, data) =>
                            error ? console.error(error) : console.log("Engineer file written")
                            )
                        }) // Engineer readFile

                    } else if (employeeArray[i].role === 'Intern'){

                        let strName = String(employeeArray[i].name);
                        let strRole = String(employeeArray[i].role);
                        let strID = String(employeeArray[i].id);
                        let strEmail = String(employeeArray[i].email);
                        let strSchool = String(employeeArray[i].school);

                        // Writing to html template
                        fs.readFile('./templates/intern.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            } else {
                                console.log("Intern file read");
                            }
                            
                            let internResult = data.replace("{{{name}}}", strName).replace("{{{role}}}", strRole).replace("{{{id}}}", strID).replace("{{{email}}}", strEmail).replace("{{{school}}}", strSchool);

                            fs.writeFile('./templates/intern.html', internResult, 'utf8', (error, data) =>
                            error ? console.error(error) : console.log("Intern file written")
                            )
                        }) // Intern readFile

                    } // If/Else
                } // For Loop

            }); // readFile
        }) // Second then
} // Function

// Calling the function
inquirerPrompts();

let employeeArray = [];

// Exporting the function
module.exports = inquirerPrompts;