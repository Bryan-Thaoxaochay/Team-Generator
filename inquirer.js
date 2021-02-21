const inquirer = require('inquirer');

inquirer
    .prompt([
        {

        },
    ]) // Inquirer
    .then((responses) => {

        const README = generateREADME(responses);

        fs.writeFile("README.md", README, (err) =>
            err ? console.error(err) : console.log("MD Created")
        );

    }) // Then