/*
    Output to screen
    - Window.Alert()
    - Document.Write()
    - Console.Log()
    Syntax
*/
// this mean start work after load
// window.onload = function () {
//     document.querySelector("h1").style.color="blue";
//     document.querySelector("h1").style.fontSize="250px";
// }

// window.alert("click and you will lose your file");
// document.write("<h2>this page to <span>know</span> a little about js code</h2>");
// console.log("You can see all action from here");
// ------------------------------------------------------------------------------------------------------------------------------
/*
    Console Methods <---------------
    - log
    - error
    - table

    Web Api

    Styling Console
    - Directive  %c
*/

// console.log("Welcome to Js");
// console.error("You will Lose Your Window");
// console.table(["Ahmed", "Mohamed","Naser"]);

// console.log("Hello From %cOldaf %cTarotus","color: red; font-size: 30px", "color: green; font-size: 30px");

// var anything = "ahmed";
// console.log("Hello " + anything);
// console.log('hello ${anything}');
// ------------------------------------------------------------------------------------------------------------------------------
/*
    Data Types Intro
    - String => Any character
    - Number => Any Number
    - Array => Object
    - Object => Character + number
    - Boolean
*/

// console.log("Oldaf Tarouts");  
// console.log(typeof "Oldaf Tarotus");                                  String
// console.log(typeof 5000);                                             Number
// console.log(typeof 5000.99);                                          Number
// console.log(typeof [10, 15, 20]);                                     Array  - Opject
// console.log(typeof ["Ol", "Ta", "Ah"]);                               Array  - Opject
// console.log(typeof {name: "Oldaf", age: 30, country: "eg"});          Opject
// console.log(typeof true);                                             Boolean
// console.log(typeof false);                                            Boolean
// console.log(typeof undefined);                                        Undefined
// console.log(typeof null);                                             Opject

// ------------------------------------------------------------------------------------------------------------------------------
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

// var user ="Ahmed"
// var age ="30"
// or 
// var user ="ahmed", age = 30;

// console.log(user);
// console.log =(age);

// change any att from document 
// console.log("Hello");
// hello.innerhtml ="option"
// ------------------------------------------------------------------------------------------------------------------------------
/*
    Identifiers
    - Name conventions and rules
    - Reserved words
*/

// var UserName ="Ahmed";
// console.log(UserName);
// or 
// console.log(User_Name);
// console.log(User-Name);
// console.log(user_name); etc  must be first character no a number
// -----------------------------------------------------------------------------------------------------------------------------

/*
    var     <<<<<<<<<<
    - Redeclare (yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Let     <<<<<<<<<<
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Const   <<<<<<<<<<
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope
*/
// -------------------------------------------------------------------------------------------------------------------------------
/*
    String Syntax + Character Escape Sequences
    \ Escape + Line Continue
    \n
*/
// console.log('Ahmed Naser "Elsayed"')
// console.log("Ahmed Naser 'Elsayed'")
// console.log('Ahmed Naser \'Elsayed\'')
// console.log("Ahmed Naser \"Elsayed\"")
// console.log("Ahmed \\Naser \"Elsayed\"")
// console.log("ahmed \
// Naser \
// Elsayed")
// console.log("Ahmed \nNaser \nElsayed")

// -----------------------------------------------------------------------------------------------------------------------

/*
    Concatenation  +
*/

// let a ="We Love "
// let b ="Java Script"

// document.write(a + b)
// document.write(a + " " + b)
// console.log(a, b)
// -----------------------------------------------------------------------------------------------------------------------

/*
Template Literals (Template Strings)
*/

// let a ="We Love";
// let b ="Java Script";
// let c ="And";
// let d ="Programming";

// // console.log(a + " \"\" " + b + "\n" + c + " " +  d);

// console.log(`${a} "" '' \\ ${b} 
// ${c} ${d}`)

let title ="Oldaf";
let desc ="Oldaf Tarotus Designer";

let markup = `
    <div class="card">
        <div class="child">
        <h2>${title}</h2>
        <p>${desc}</p>
        </div>
    </div>
    `;
    document.write(markup);