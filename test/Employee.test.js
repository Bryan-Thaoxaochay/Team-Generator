const inquirerPrompts = require('../app');
const Employee = require('../classes/classEmployee');

describe("getName", () => {

    it("should console log the name of the member", () => {
        let nameInquirer = inquirerPrompts.prompts().response.name;
        let nameEmployee = new Employee().getName();

        expect(nameInquirer).toBe(nameEmployee);
    })

});

// describe("getId", () => {

//     it("should", () => {

//         expect().();
//     })

// });

// describe("getEmail", () => {

//     it("should", () => {

//         expect().();
//     })

// });

// describe("getRole", () => {

//     it("should", () => {

//         expect().();
//     })

// });