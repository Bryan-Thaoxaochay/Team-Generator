const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team members full name? (i.e. Bryan Thaoxaochay)'
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is their role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        },
    ]) // Inquirer
    .then((responses) => {

        // fs.writeFile("README.md", README, (err) =>
        //     err ? console.error(err) : console.log("MD Created")
        // );

    }) // Then