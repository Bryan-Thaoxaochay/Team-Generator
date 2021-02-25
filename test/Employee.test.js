const Employee = require('../classes/classEmployee');

describe("getName", () => {

    it("should console log the name", () => {
        
        const name = "Bryan"
        const employee = new Employee(name);

        expect(employee.getName()).toBe(name);
    })

});

describe("getId", () => {

    it("should console log the ID", () => {

        const id = "1"
        const employee = new Employee("", id);

        expect(employee.getId()).toBe(id);
    })

});

describe("getEmail", () => {

    it("should console log the email", () => {

        const email = "email@email.com"
        const employee = new Employee("", "", email);

        expect(employee.getEmail()).toBe(email);
    })

});

describe("getRole", () => {

    it("should console log the role", () => {

        const role = "Employee"
        const employee = new Employee("", "", "")

        expect(employee.getRole()).toBe(role);
    })

});