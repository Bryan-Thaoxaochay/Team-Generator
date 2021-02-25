const Intern = require('../classes/classIntern');

describe("getSchool", () => {

    it("should console log the school", () => {

        const school = "University of Minnesota - TC"
        const intern = new Intern("", "", "", school);

        expect(intern.getSchool()).toBe(school);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Intern"
        const intern = new Intern("", "", "", "")

        expect(intern.getRole()).toBe(role);
    })

});