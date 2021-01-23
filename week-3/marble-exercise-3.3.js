/*
============================================
; Title:  Marble Exercise 3.3
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   23 January 2021
; Description: Singleton Pattern
;===========================================
*/
//Linking of the header file.
const header = require('./marble-header.js');

//Creating the Sigleton Pattern.
var DatabaseSingleton = (function(){
    var instance;

    function createInstance(){
        var postgresDatabase = new Object("Database instance initialized!");

        return postgresDatabase;
    }

    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }

            return instance;
        }
    }
})();

function databaseSingletonTest()
{
    let oracle = DatabaseSingleton.getInstance();
    let postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s ", oracle === postgres);
}
//Displaying the Well Formated Header.
console.log(header.display("Fred", "Marble", "Exercise 3.3") + "\n");

//Calling the Database Singleton Test.
databaseSingletonTest();