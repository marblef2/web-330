/*
============================================
; Title:  Marble Exercise 3.2
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   23 January 2021
; Description: Prototypes
;===========================================
*/
//Linking of the header file.
const header = require('./marble-header.js');

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

//Creation of the Oracle Object.
function Oracle (properties){
    this.username = properties.username || "orc-admine";
    this.password = properties.password || "0rc-sec43t";
    this.server = properties.server || "localhost:3000";
    this.version = properties.version || 8.6;
}

//Creation of the Informix Object.
function Informix (properties){
    this.username = properties.username || "in-admin";
    this.password = properties.password || "1n-s3c43t";
    this.server = properties.server || "localhost:8880";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } 
  if (properties.databaseType === 'MySql') {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === 'Oracle'){
      this.databaseClass = Oracle;
  }
  if (properties.databaseType === 'Informix'){
      this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

//Oracle Database Object Creation.
let oracleFactory = new DatabaseFactory();
let oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "admin",
    password: "admin"
});

//Informix Database Object Creation.
let informixFactory = new DatabaseFactory();
let informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "admin",
    password: "password"
});

//Creating the Well Formated Header.
console.log(header.display("Fred", "Marble", "Exercise 3.2") + "\n");

//Display of the Oracle Information.
console.log(oracle);

//Creating a Blank Space.
console.log("\n");

//Display of the Informix Information.
console.log(informix);
// end program
