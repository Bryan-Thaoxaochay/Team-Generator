const Manager = require('../classes/classManager');

describe("getOfficeNumber", () => {

    it("should console log the office number", () => {

        const officeNumber = "1"
        const manager = new Manager("", "", "", officeNumber);

        expect(manager.getOfficeNumber()).toBe(officeNumber);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Manager"
        const manager = new Manager("", "", "", "")

        expect(manager.getRole()).toBe(role);
    })

});