const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team members full name? (i.e. Bryan Thaoxaochay)'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        },
        // { NEED TO FIND OUT HOW TO ASK FURTHER QUESTIONS ONCE ROLE IS CHOSEN
        //     type: 'checkbox',
        //     name: 'role',
        //     message: 'What is their role?',
        //     choices: ['Manager', 'Engineer', 'Intern'],
        //     furtherQuestions: function() {
        //         switch(this.role) {
        //             case this.role === 'Manager':
        //                 inquirer.prompt([
        //                     {type: 'input', name: 'officeNumber', message: 'What is their office number?'}
        //                 ])
        //                 break;
        //             case this.role === 'Engineer':
        //                 inquirer.prompt([
        //                     {type: 'input', name: 'github', message: 'What is their GitHub username?'}
        //                 ])
        //                 break;
        //             case this.role === 'Intern':
        //                 inquirer.prompt([
        //                     {type: 'input', name: 'school', message: 'What undergraduate school did they go to?'}
        //                 ])
        //                 break;
        //         } // switch
        //     } // function
        // }
    ]) // Inquirer
    .then((responses) => {


        
        // responses.furtherQuestions;
        

        // fs.writeFile("README.md", README, (err) =>
        //     err ? console.error(err) : console.log("MD Created")
        // );

    }) // Then