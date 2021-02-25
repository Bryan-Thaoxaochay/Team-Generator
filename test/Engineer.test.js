const Engineer = require('../classes/classEngineer');

describe("getGithub", () => {

    it("should console log the Github username", () => {

        const github = "Bryan-Thaoxaochay"
        const engineer = new Engineer("", "", "", github);

        expect(engineer.getGithub()).toBe(github);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Engineer"
        const engineer = new Engineer("", "", "", "")

        expect(engineer.getRole()).toBe(role);
    })

});