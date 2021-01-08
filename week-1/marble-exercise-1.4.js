/*
============================================
; Title:  Marble Exercise 1.4
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   08 January 2021
; Description: Duck Typing, A.K.A. "Interfaces"
;===========================================
*/

//Linking of the header file.
const header = require('./marble-header.js');


// Variables to create the cars.
let cruze = new Car("Cruze");
let toy = new Truck("Tundra", "2015");
let renegade = new Jeep("Renegade", "2020", "Purple");


// Constructing the Car Object.
function Car(model){
    this.model = model;
}

Car.prototype.start = function(){
    console.log("Car added to the racetrack!");
}

// Constructing the Truck Object.
function Truck(model, year){
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log("Truck added to the racetrack!");
}

// Constructing the Jeep Object.
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log("Jeep added to the racetrack!");
}

//Creating the Racetrack.
let racetrack = [];

//Adding the Vehicles to the track.
function driveIt(vehicle){
    vehicle.start();
    
    racetrack.push(vehicle);
}


//Displays the Header.
console.log(header.display("Fred", "Marble", "Exercise 1.4"));

//Adding a blank line.
console.log("");

//Calling the Drive It function.
driveIt(cruze);
driveIt(toy);
driveIt(renegade);

//Displaying the Racetrack Array.
console.log("\n-- The following vehicles have been added tot he racetrack --");
for (var z =0; z< racetrack.length; z++){
    console.log(racetrack[z].constructor.name + ": " + racetrack[z].model);
}