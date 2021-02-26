// Local Files
const Manager = require('./classes/classManager.js');
const Engineer = require('./classes/classEngineer.js');
const Intern = require('./classes/classIntern.js');

// Modules
const inquirer = require('inquirer');
const fs = require('fs');

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

            }  

            // Getting questions to loop back around if user wants to add another member.
            if(responses.anotherMember){
                prompts();
            } else{
                console.log("No more members are being added.")
            }


        }) // First then
        
        .then(() => {

            // Read html file I want info to go to
            fs.readFile('./templates/main.html', 'utf8', function (error, data) {

                if (error){
                    console.error(error);
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
                        fs.readFile('./templates/main.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            }
                            
                            let managerResult = data.replace("{{{manager-name}}}", strName).replace("{{{manager-role}}}", strRole).replace("{{{manager-id}}}", strID).replace("{{{manager-email}}}", strEmail).replace("{{{office-number}}}", strOfficeNumber);

                            fs.writeFile('./templates/main.html', managerResult, 'utf8', function (error, data) {
                                if (error) {
                                    console.error(error);
                                }
                            });
                        }); // Manager readFile

                    } else if (employeeArray[i].role === 'Engineer') {

                        let strName = String(employeeArray[i].name);
                        let strRole = String(employeeArray[i].role);
                        let strID = String(employeeArray[i].id);
                        let strEmail = String(employeeArray[i].email);
                        let strGithub = String(employeeArray[i].github);

                        // Writing to html template
                        fs.readFile('./templates/main.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            }

                            let engineerResult = data.replace("{{{engineer-name}}}", strName).replace("{{{engineer-role}}}", strRole).replace("{{{engineer-id}}}", strID).replace("{{{engineer-email}}}", strEmail).replace("{{{github}}}", strGithub);

                            fs.writeFile('./templates/main.html', engineerResult, 'utf8', function (error, data) {
                                if (error) {
                                    console.error(error);
                                }
                            });
                        }); // Engineer readFile

                    } else if (employeeArray[i].role === 'Intern'){

                        let strName = String(employeeArray[i].name);
                        let strRole = String(employeeArray[i].role);
                        let strID = String(employeeArray[i].id);
                        let strEmail = String(employeeArray[i].email);
                        let strSchool = String(employeeArray[i].school);

                        // Writing to html template
                        fs.readFile('./templates/main.html', 'utf8', function (error, data) {

                            if (error) {
                                console.error(error);
                            }
                            
                            let internResult = data.replace("{{{intern-name}}}", strName).replace("{{{intern-role}}}", strRole).replace("{{{intern-id}}}", strID).replace("{{{intern-email}}}", strEmail).replace("{{{school}}}", strSchool);

                            fs.writeFile('./templates/main.html', internResult, 'utf8', function (error, data) {
                                if (error) {
                                    console.error(error);
                                }
                            });
                        }); // Intern readFile

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