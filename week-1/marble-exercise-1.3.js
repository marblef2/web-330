/*
============================================
; Title:  Marble Exercise 1.3
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   07 January 2021
; Description: Function refresher exercise.
;===========================================
*/

//Linking of the header file.
const header = require('./marble-header.js');

//Creating the Cell Phone Object
function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    // get price of cellphone
    this.getPrice = function()
    {
        return this.price;
    }

    // Get Model function
    this.getModel = function()
    {
        return this.model;
    }

    //Get Details Function
    this.getDetails = function()
    {
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.model + "\nColor: " + this.color + "\nPrice: " + this.price;
    }
}

//Creating the Cell Phone Object
let cellPhone = new CellPhone("Samsung", "Galaxy S20", "Blue", "589.98");

//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 1.3"));

//Putting in a blank line between Header and exercise
console.log("\n");

//Displays the Cell Phone Object
console.log(" -- DISPLAYING CELL PHONE DETAILS --");
console.log(cellPhone.getDetails());

