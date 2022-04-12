/*
    Output to screen
    - Window.Alert()
    - Document.Write()
    - Console.Log()
    Syntax
*/
// this mean start work after load
window.onload = function () {
    document.querySelector("h1").style.color="blue";
    document.querySelector("h1").style.fontSize="250px";
};

// window.alert("click and you will lose your file");
// document.write("<h2>this page to <span>know</span> a little about js code</h2>");
// console.log("You can see all action from here");
------------------------------------------------------------------------------------------------------------------------------
/*
    Console Methods <---------------
    - log
    - error
    - table

    Web Api

    Styling Console
    - Directive %c
*/

console.log("Welcome to Js");
console.error("You will Lose Your Window");
console.table(["Ahmed", "Mohamed","Naser"]);

console.log("Hello From %cOldaf %cTarotus","color: red; font-size: 30px", "color: green; font-size: 30px");

var anything = "ahmed";
console.log("Hello " + anything);
console.log('hello ${anything}');
------------------------------------------------------------------------------------------------------------------------------
/*
    Data Types Intro
    - String => Any character
    - Number => Any Number
    - Array => Object
    - Object => Character + number
    - Boolean
*/

console.log("Oldaf Tarouts");
console.log(typeof "Oldaf Tarotus");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 20]);  Array
console.log(typeof ["Ol", "Ta", "Ah"]); array
console.log(typeof {name: "Oldaf", age: 30, country: "eg"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

------------------------------------------------------------------------------------------------------------------------------
/*
    Variables intro
    - what is variable ?
    - why we use variables ?
    - Declare a variable and use 
    - syntax (keyword | variable name | assignment operator | variable value)
    - multiple variables in the same line 
    - id and global variable
    - loosely typed vs strongly types
*/

var user ="Ahmed"
var age ="30"
or 
// var user ="ahmed", age = 30;

console.log(user);
console.log =(age);
------------------------------------------------------------------------------------------------------------------------------
/*
    Identifiers
    - Name conventions and rules
    - Reserved words
*/

var UserName ="Ahmed";
console.log(UserName);
-----------------------------------------------------------------------------------------------------------------------------

/*
    var 
    - Redeclare (yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Let
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Const 
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope
*/
-------------------------------------------------------------------------------------------------------------------------------