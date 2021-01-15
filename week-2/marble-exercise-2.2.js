/*
============================================
; Title:  Marble Exercise 2.2
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   15 January 2021
; Description: Prototypes
;===========================================
*/

//Linking of the header file.
const header = require('./marble-header.js');

//Creating the person function.
let person = {
    getAge: function()
    {
        return this.getAge;
    }
};

//Creating the Person Object.
let daniel = Object.create(person, {
    "age":
    {
        "value" : "29"
    },
    "fullname":
    {
        "value" : "Daniel Craig"
    }

});

daniel.getAge();

//Creating the Well Formated Header.
console.log(header.display("Fred", "Marble", "Exercise 2.2"));

//Adding a Blank Space between header and exercise.
console.log("\n");

//Below is the exercise requirements.
console.log("The person's full name is: '%s'", daniel.fullname);
console.log("The person's age is '%s'", daniel.age);