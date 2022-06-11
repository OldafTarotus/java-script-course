/*
    Output to screen <---------------
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
    Data Types Intro <---------------
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
    Variables intro <---------------
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
    Identifiers <---------------
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
    var     <---------------
    - Redeclare (yes)
    - Access Before Declare (Undefined)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Let     <---------------
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope

    Const   <---------------
    - Redeclare (no => Error)
    - Access Before Declare (Error)
    - Variable Scope Drama [Added to Window] ()
    - Block or Function Scope
*/
// -------------------------------------------------------------------------------------------------------------------------------

/*
    String Syntax + Character Escape Sequences <---------------
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
    Concatenation  +   <---------------
*/
// let a ="We Love "
// let b ="Java Script"

// document.write(a + b)
// document.write(a + " " + b)
// console.log(a, b)
// ----------------------------------------------------------------------------------------------------------------------

/*
    Template Literals (Template Strings) <---------------
*/
// let a ="We Love";
// let b ="Java Script";
// let c ="And";
// let d ="Programming";

// // console.log(a + " \"\" " + b + "\n" + c + " " +  d);

// console.log(`${a} "" '' \\ ${b} 
// ${c} ${d}`)

// let title ="Oldaf";
// let desc ="Oldaf Tarotus Designer";

// let markup = `
//     <div class="card">
//         <div class="child">
//         <h2>${title}</h2>
//         <p>${desc}</p>
//         </div>
//     </div>
//     `;
//     document.write(markup);
// ------------------------------------------------------------------------------------------------------------------

/*
    Challenge <---------------
*/

// let The_Title ="Oldaf", The_Description ="Oldaf Tarotus", The_Date ="25/10";

// let markup =`
//     <div class="containers">
//         <h3>${The_Title}</h3>
//         <p>${The_Description}</p>
//         <span>${The_Date}</span>
//     </div>
// `;
// document.write(markup)
// --------------------------------------------------------------------------------------------------------------------------

/*
    Arithmetic Operators <---------------
    + Addition
    - Subtraction
    * Multiplication
    / Division
    ** Exponetiation (Es7)
    % Modulus (Division)
    ++ Increment [ Post / Pre ]
    -- Decrement [ Post / Pre ]
*/

// console.log(10 + 20);
// console.log(10 + "Ahmed");

// console.log(10 - 20);
// console.log(10 - "Ahmed");
// console.log(typeof NaN);

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2);


// console.log(post++  ++pre);
// console.log(post-- --pre);
// -----------------------------------------------------------------------------------------------------------------------

/*
    - + Unary Plus [Return Number If Its Not Number] <---------------
    - + Unary Negation [Return Number If Its Not Number + Negates It] <---------------
    Tests
    - Normal Number
    - String Number
    - String Negative Number
    - String Text
    - Float
    - Hexadecimal Numeral System => 0xff
    - Null
    - False
    - True
*/

// Unary Plus:-
// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Ahmed");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// Unary Negation:-
// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Ahmed");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));
// ------------------------------------------------------------------------------------------------------------

/*
    Type Coercion (Type Casting) <---------------
    - +
    - - 
    - "" - 2 
    - false - ture
*/

// let a ="10";
// let b =20;
// let c =true;

// console.log(+a + b);
// console.log(Number(a) + b);

// console.log(a - b);
// console.log(b - a);


// console.log("" - 2);
// console.log(+"");
// console.log(0 - 2);

// console.log(false - true);
// console.log(+false - +true);

// console.log(b + c);
// console.log(+a + b + c);
// -------------------------------------------------------------------------------------------------------------------

/*
    Assignment Operator <---------------
*/

// let a = 10;

// a = a + 20;
// a = a + 70;

// all the same ( -=  or +=)
// a +=100;  >>>>> // a = a + 100  
// a -=50;   >>>>> // a = a 50
// a /=50;   >>>>> // a = a / 50

// console.log(a);
// -----------------------------------------------------------------------------------------------------------------------

/*
    Challenge 1  <---------------
*/

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a] [+]
    [++a]
    - Value:
    - Explain:
    [+]
    - Explain
*/

/*
    Challenge 2
*/
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

//Only Use Varibles Value
//Do Not  Use Varibles Twice

// console.log(); // 2000
// console.log(); // 173
// -------------------------------------------------------------------------------------------------------------------------

/*
    Number <---------------
    - Double Precision
    - Syntactic Sugar "_"
    - e
    - **
    - With Decimal
    - Number + Bigint
    - Number Min Value
    - Number Max Value
*/
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.00);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 1000);   <== you will not receive any change 
// -------------------------------------------------------------------------------------------------------------------------

/*
    Number Methods <---------------
    - Two Dots To Call A Methods
    - ToString()
    - ToFixed()
    - ParseInt()
    - ParseFloat()
    - IsInteger() [Es6]
    - IsNaN() [Es6]
*/
// console.log((100).toString());
// console.log(100.10.toString());

// console.log(100.554555.toFixed(3));

// console.log(Number("100 ahmed"));
// console.log(+"100 ahmed");
// console.log(parseInt("100 ahmed"));
// console.log(parseInt("ahmed 100 ahmed"));
// console.log(parseInt("100.500 ahmed"));
// console.log(parseFloat("100.500 osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN(100));
// console.log(Number.isNaN("ahmed" / 100));
// -------------------------------------------------------------------------------------------------------------------------

/*
    Math Object <---------------
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - pow()
    - random()
    - trunc() [Es6]
*/
// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));

// console.log(Math.random());

// console.log(Math.trunc(99.5));
// -------------------------------------------------------------------------------------------------------------------------

/*
    Number Challenge <---------------
*/
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variable And Retun SVGAnimatedInteger
// console.log();

// // Use Variable a + d One Time To Get The Needed Output
// console.log();

// // Get Integer "2" From d Variable With 4 Methods
// console.log();
// console.log();
// console.log();
// console.log();

// // Use Variable b + d to Get This Values
// console.log(); // 66.67 =>
// console.log(); // 67 ==>
// -------------------------------------------------------------------------------------------------------------------------

/*
    String Methods <---------------
    - Access With Index
    - Access With CharAt()
    - Length
    - Trim()
    - ToUpperCase()
    - ToLowerCase()
    - Chain Methods
*/
// let TheName =   "  Ahmed  "

// console.log(TheName);
// console.log(TheName[1]);
// console.log(TheName[5]);

// console.log(TheName.charAt(1));
// console.log(TheName.charAt(5));

// console.log(TheName.length);
// console.log(TheName.trim());

// console.log(TheName.toUpperCase());
// console.log(TheName.toLowerCase());

// console.log(TheName.trim().charAt(2).toUpperCase());
// -------------------------------------------------------------------------------------------------------------------------

/*
    String Methods <---------------
    - IndexOf(Value [Mand], Start [Opt] 0)
    - LastIndexOf(Value [Mand], Start [Opt] Length)
    - Slice(Start [Mand], End [Opt] Not Include End)
    - Repeat(Times) [Es6]
    - Split(Separator [Opt], Limit [Opt])
*/

// let a = "Ahmed|Naser Elsayed";

// console.log(a.indexOf("Naser"));
// console.log(a.indexOf("Naser", 7))
// console.log(a.indexOf("N")); //6
// console.log(a.lastIndexOf("s")); //14

// console.log(a.slice(0));
// console.log(a.slice(5, 11));
// console.log(a.slice(-11, -5));

// console.log(a.repeat(5));

// console.log(a.split(" "));
// console.log(a.split(""));
// console.log(a.split("|"));
// console.log(a.split("", 5));
// console.log(a.split(" ", 5));
// -------------------------------------------------------------------------------------------------------------------------

/*
    String Methods <---------------
        - Substring (Start [Mand], End [Opt] Not Including End)
        ----- Start > End Will Swap
        ----- Start < 0 IT Start From 0
        ----- Use Length To Get Last Character 
        - Substr(Start [Mand], Character To Extract)
        ----- Start >= Length =""
        ----- Negative Start From End
        - Includes (Value [Mand], Start [Opt] Default 0 [Es6])
        - StartsWith (Value [Mand], Start [Opt] Default 0 [Es6])
        - EndsWith (Value [Mand], Length [Opt] Default Full Length [Es6])
*/

// let a = "Ahmed Naser Elsayed";

// console.log(a.length)

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6)); // 0 - 6 

// console.log(a.substring(a.length - 1));
// console.log(a.substring(a.length - 7));
// console.log(a.substring(a.length - 7, a.length - 5));

// console.log(a.includes("Elsayed"));
// console.log(a.includes("Elsayed", 13)); 

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("m", 2));

// console.log(a.endsWith("d"));
// console.log(a.endsWith("l"));
// console.log(a.endsWith("l", 14));
// -------------------------------------------------------------------------------------------------------------------------

/*
    Comparison Operators <---------------
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal

    - < Smaller Than
    - <= Smaller Than Or Equal 
*/

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value Only + Type
// console.log(10 !== "10"); // Compare Value Only + Type
// console.log(10 !== 10); // Compare Value Only + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 20);
// console.log(10 <= 10);

// console.log(typeof "Ahmed" === typeof "Mohamed"); //  Both same tring & Same value by typeof
// -------------------------------------------------------------------------------------------------------------------------

/*
    Logical Operators <---------------
    - ! Not
    - && And 
    - || OR
*/

// console.log(true);
// console.log(!true);

// console.log(!(10 == "10"));

// console.log(10 == "10" && 10 > 8 && 10 > 50);

// console.log(10 == "10" || 10 > 8 || 10 > 50);
// -------------------------------------------------------------------------------------------------------------------------

/*
    Control Flow <---------------
    - if 
    - else if
    - else

    if (Condition) {
        // Block Of Code
    }
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "egypt";
// // let country = "syria";
// // let countr   y = "ksa";
// let student = true;


// if (discount === true) {
//     price -= discountAmount; // price = price - DiscountAmout
// } else if (country === "egypt") {
//     price -= discountAmount + 10;
//     if (student === true) {
//         price -= discountAmount + 20
//     }
// } else if (country === "syria") {
//     price -= discountAmount + 20;
// } else {
//     price -= discountAmount - 20
// }

// console.log(price);
// -------------------------------------------------------------------------------------------------------------------------

/*
    Conditional (Ternary) Operator <---------------
*/

// let TheName = "Mona";
// let TheGender = "female";
// let TheAge = 30;

// if (TheGender === "male") {
//     console.log("Mr");
// } else {
//     console.log("Mrs");
// }

// // Condition ? If True : If false

// TheGender === "male" ? console.log("Mr") : console.log("Mrs");
// let result = TheGender === "male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(TheGender === "male" ? "Mr" : "Mrs");  

// console.log(`Hello ${TheGender === "male" ? "Mr" : "Mrs"} ${TheName}`);

// TheAge < 20 
//     ? console.log(20) 
//     : TheAge > 20 && TheAge < 60 
//     ? console.log("20 to 60") 
//     : TheAge > 60 
//     ? console.log("60+") 
//     : console.log("Unknown");
// -------------------------------------------------------------------------------------------------------------------------

/*
    Logical Or ||  <---------------
    -- Null + Undefined + Any Falsy Value
    Nullish Coalescing Operator ??
    -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0; // ("" or  null or any false value)

// console.log(`The Price is ${price || 200}`);
// console.log(`The Price is ${price ?? 200}`);

// document.write(`The Price is ${price || 200}`);
// document.write(`The Price is ${price ?? 200}`);
//-------------------------------------------------------------------------------------------------------------------------

// /*
//     If Challenge <---------------
// */

// let a = 10;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a<= 40) {
//     console.log("10 to 40");
// } else if (a > 40) {
//     console.log("unknown")
// }

// // Write With Ternary If Syntax
// let st = "abd elsalam aref";
// if ("????" === "34") {
//     console.log("good");
// }

// // w Poition May Change
// if ("????" === "w") {
//     console.log("good");
// }

// if ("????" !== "string") {
//     console.log("good");
// }

// if ("????" === "number") {
//     console.log("good");
// }

// if ("????" === "AbdAbd") {
//     console.log("good");
// }
//-------------------------------------------------------------------------------------------------------------------------

/*
    Switch Statment <---------------
    Switch(Expression){
        Case 1:
            // Code Block
            break;
        Case 2:
            // Code Block
            break;
        Default :
            // Code Block
    }
        - Default Ordering
        - Multiple Match
        - ===
 */

// let day = 2;

// switch (day) {
//     default:
//             console.log("Unknow Day");
//         break;
//     case 0:
//             console.log("Satarday");
//         break;
//     case 1:
//             console.log("Sunday");
//         break;
//     case 2:
//     case 3:
//             console.log("Monday");
//         break;
// };
//-------------------------------------------------------------------------------------------------------------------------

/*
    Arrays
    - Creat Arrays [Two Methods] new Array() + []
    - Access Arrays 
    - Nested Arrays Elements
    - Change Arrays Elements
    - Check For Array Array.IsArray(Arr);
*/

// let myfriend =["ahmed", "Mohamed", "Sayed", ["Omda", "Amro"]];

// console.log(`Hello ${myfriend[0]}`);
// console.log(`Hello ${myfriend[2]}`);
// console.log(`${myfriend[1][2]}`);
// console.log(`Hello ${myfriend[3][1]}`);
// console.log(`${myfriend[3][1][2]}`);

// console.log(myfriend);
// myfriend[1] = "gamal";
// console.log(myfriend);
// myfriend[3] = ["Gehad", "Sondos"];
// console.log(myfriend);

// console.log(Array.isArray(myfriend));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods
    - Length
*/
// Index Start From 0 [0, 1, 2, 3]
// let myfriend = ["ahmed", "Mohamed", "Sayed", "Alaa"];
// console.log(myfriend.length); // 4

// // myfriend[myfriend.length] = "Gamal"; // this is how to add anything i want by dynamic  {case 1}
// myfriend[myfriend.length - 1] = "Maged"; // this is how to update last index by dynamic  {case 2}
// myfriend.length = 3; // this is how to control your length {case 3}
// console.log(myfriend);
//-------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods [adding And Removing]
    - unshift ("", "") Add Element to the First
    - push ("", "") Add Add Element To The End
    - Shift() Remove First Element From Array
    - PoP() Remove Last Element From Array
*/

// let myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// console.log(myfriend);

// myfriend.unshift("pepo", "besher"); // this is how to add anything at the beginning
// console.log(myfriend);

// myfriend.push("pepo", "besher"); // this is how to add anything at the end
// console.log(myfriend);

// let first = myfriend.shift();
// console.log(myfriend);
// console.log(`First Name is ${first}`);


// let last = myfriend.pop();
// console.log(myfriend);
// console.log(`Last Name is ${last}`);
//------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods [Search]
    - indexof(Search Element, From index [opt])
    - lastindexof(Search Element, From index [opt])
    - includes(ValueToFind, Fromindex [opt] [es7])
*/
// let myfriend = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myfriend);

// console.log(myfriend.indexOf("Ahmed"));
// console.log(myfriend.indexOf("Ahmed", 2));

// console.log(myfriend.lastIndexOf("Ahmed"));
// console.log(myfriend.indexOf("Ahmed", -2));

// console.log(myfriend.includes("Ahmed"));
// console.log(myfriend.includes("Ahmed", 2));

// if (myfriend.indexOf("osama") === -1) {
//     console.log("Not Found");
// }

// console.log(myfriend.indexOf("Osama"));
// console.log(myfriend.lastIndexOf("Osama"));
//------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods [Sort]
    - sort(function [opt])
    - reverse
*/
// let myfriend = [10, "Ahmed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
// console.log(myfriend);

// console.log(myfriend.sort());
// console.log(myfriend.reverse());

// console.log(myfriend.sort().reverse()); // chain how to make 2x function in same line
//------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods [Slicing]
    - Slice(Start [Opt], End [Opt] Not including End)
        - Slice() => All Array
        - If start is undefined => 0
        - Negative Count Form End
        - If End Is  Undefined || > Index = > Slice To The End Array.length
        - Return New Array 
    - Splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
        - If Negative => Start From The End
*/
// let myfriend = ["Ahmed", "Mohamed", "Sayed", "Osama", "Gamal", "Ameer"];
// console.log(myfriend);
// console.log(myfriend.slice());
// console.log(myfriend.slice(1));
// console.log(myfriend.slice(1, 3));
// console.log(myfriend.slice(-3));
// console.log(myfriend.slice(1, -2));
// console.log(myfriend.slice(-4, -2));
// console.log(myfriend);

// myfriend.splice(0, 0, "Sameer", "Samara");
// console.log(myfriend);

// myfriend.splice(0, 1, "Sameer", "Samara");
// console.log(myfriend);

// myfriend.splice(0, 2, "Sameer", "Samara");
// console.log(myfriend);

// myfriend.splice(1, 2, "Sameer", "Samara"); // Start From, Delete, Add 
// console.log(myfriend);
//------------------------------------------------------------------------------------------------------------------------

/*
    Arrays Methods [Joining]
    - Concat(Array, Array) => Return A New Array
    - Join(Separator)
*/
// let myfriend = ["Ahmed", "Mohamed", "Sayed", "Ali", "Gamal", "Ameer"];
// let mynewfriend = ["Samar", "Dalya"];
// let schoolfriend = ["Samar", "Dalya"];

// let allfriend = myfriend.concat(mynewfriend, schoolfriend, "Gehad", [1, 2]);

// console.log(myfriend);

// console.log(allfriend);

// console.log(allfriend.join());
// console.log(allfriend.join(""));
// console.log(allfriend.join(" @ "));
// console.log(allfriend.join("|"));
// console.log(allfriend.join("|").toUpperCase());
//------------------------------------------------------------------------------------------------------------------------

/*
    Array Challenges
*/
// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mohamed", "Sayed", "Gehad", "Asmaa", "Sondos"];
// // Write Code Here
// console.log(my); // ["Gehad", "Sayed", "Mohamed", "Ahmed"]

// console.log(my.slice("????")); // ["Sayed", "Mohamed"]

// console.log(); // "Mohamed"

// console.log(); // "ed"
//------------------------------------------------------------------------------------------------------------------------

/*
    Loop
    - For
    for ([1] [2] [3]) {
        //block of code
    }
*/
// for (let i = 0; i < 10; i++) {  // I++ mean like post pre add 1 each time you found it them write
//     console.log(i);
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Loop
    - Loop On Sequences 
*/
// let myfriend = [1, 2, "Ahmed", "Mohamed", "Sayed", "Gehad", "Asmaa", "Sondos"];

// let onlyname = [];

// // console.log(myfriend[0]); // not dynamic 
// // console.log(myfriend[1]);
// // console.log(myfriend[2]);
// // console.log(myfriend[3]);
// // console.log(myfriend[4]);

// console.log(onlyname);

//  
// if (typeof myfriend[0] === "string") { // not dynamic
//     onlyname.push(myfriend[0]);
// }
// if (typeof myfriend[1] === "string") {
//     onlyname.push(myfriend[2]);
// }
// if (typeof myfriend[2] === "string") {
//     onlyname.push(myfriend[2]);
// }
// if (typeof myfriend[3] === "string") {
//     onlyname.push(myfriend[3]);
// }

// for (let i = 0; i < myfriend.length; i++) { // dynamic
//     if (typeof myfriend[i] === "string") {
//         onlyname.push(myfriend[i]);
//     }
// }
// console.log(onlyname);
//------------------------------------------------------------------------------------------------------------------------
/*
    Loop 
    - Nested Loops
*/
// let products = ["keybord", "mouse", "pen", "pad", "monitor"];
// let colors = ["red", "green", "blue"];
// let models = ["2020", "2021"];

// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(15));
//     console.log(`# ${products[i]}`);
//     console.log("#".repeat(15));
//     console.log("colors: ");
//     for (let c = 0; c < colors.length; c++) {
//         console.log(`- ${colors[c]}`);
//     }
//     for (let m = 0; m < models.length; m++) {
//         console.log(`- ${models[m]}`);
//     }
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Loop Control
    - Break
    - Continue
    - Label
*/
// let products = ["Kebord", "Mouse", "Pen", 10, 20, "Pad", "Monitor", 30, 40];
// let colors = ["Red", "Green", "Black"];
// mainloop: for (let i = 0; i < products.length; i++) {
//     if (products[i] === "Pen") {
//         break;  // this show you how to make breal when you get result you want
//     }
//     if (typeof products[i] === "number") {
//         continue;  // this keep  going and ignore what you told him to didnt print it 
//     }
//     console.log(products[i]);
//     nestedloop: for (let c = 0; c < colors.length; c++) {
//         console.log(`- ${colors[c]}`);
//         if (colors[c] === "Green") {
//             break mainloop;    // this show you how to control main loop from nested loop
//         }
//     }
// }
//------------------------------------------------------------------------------------------------------------------------
/*
    Loop For Advanced Example
*/
// let products = ["Kebord", "Mouse", "Pen", "Pad", "Monitor"];
// let i = 0;
// for (;;) {
//     console.log(products[i]);
//     i++; //  or i += 2 or any number we want
//     if (i === products.length) break;
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Products Practice
*/
// let products = ["Kebord", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let count = 5;

// document.write(`<h1>Show ${count} products</h1>`);
// for (let i = 0; i < count; i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
// for (let c = 0; c < colors.length; c++) {
//         document.write(`<p>${colors[c]}</p>`)
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`</div>`);
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Loop
    - While
*/

// let products = ["Kebord", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let index = 0;

// // while (index < 10) {    
// //     console.log(index);
// //     index += 1;
// //     if (index === 3) {
// //         break;
// //     }
// // }

// // or

// while (index < products.length) {    
//     console.log(products[index]);
//     index += 1;
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Loop 
    - Do / While
*/

// let products = ["Kebord", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (false);
// console.log(i);
//------------------------------------------------------------------------------------------------------------------------
/*

    Function
    - What Is Function ?
    - User-Defind Vs Built IN
    - Syntax + Basic Usage
    - Example From Real Life
    - Parameter + Argument
    - Practical Example
*/

// function i(userName) {
//     console.log(`Hello ${userName}`);
// }
// i("Ahmed");
// i("Gehad");
// i("Sondos");
//------------------------------------------------------------------------------------------------------------------------

/*
    Function
    - Advanced Example
*/

// function i(userName, age) {
//     if (age < 25) {
//         console.log(`you can wait more time`);
//     } else {
//         console.log(`Hello ${userName} Your Age is ${age}`);
//     }
// }
// i("Ahmed", 31);
// i("Gehad", 20);
// i("Sondos", 28);
// --------------------------------
// /*
//     Another Example
// */
// function generate(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === 2020) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// generate(1991, 2022, 2020);
//------------------------------------------------------------------------------------------------------------------------

/*
    Function
    - Return
    - Automatic Semicolon Insertion [No Line Terminator Allowed]
    - Interruptting
*/

// function calc(num1, num2) {
//     return num1 + num2;
// }

// let result = calc(10, 20);

// console.log(result + 100);

// /*
//     Another Example
// */

// function generate(start, end) {
//     for (let i = start; i < end; i++) {
//         console.log(i);
//         if (i === 15) {
//             return; // when we write this like we cant add anything else before it , all break
//         }
//     }
// }
// generate(10, 20);
//------------------------------------------------------------------------------------------------------------------------

/*
    Function
    - Default Function Parameters
    - Function Parametars Default [Undefind]
    - Old Startegies [Condition + Logical Or]
    - ES6 Method
*/

// function i(userName = "unknown", Age = "unknown") {   // <<< Or
//     if (Age === undefined) { // <<< Or
//         Age = "unknown" 
//     }
//     Age = Age || "unknown"  // <<< or 
//     return `Hello ${userName} Your Age Is ${Age}`;
// }
// console.log(i("Ahmed", 31)); // or  console.log(i());
//------------------------------------------------------------------------------------------------------------------------

/*
    Function
    - Rest Paramenters
    - Only One Allowed
    - Must Be Last Elemnt
*/
// function calc(...num) {
//     // * console.log(aray.isarray(num));  testimng to check  <<<
//     let result = 0;
//     for (let i = 0; i < num.length; i++) {
//         result += num[i]; // result = result + num[i]
//     }
//     return `Final result is ${result}`;
// }
// console.log(calc(10, 20, 30, 40, 50));
//------------------------------------------------------------------------------------------------------------------------

/*
    Function Advanced Practice
    - Parameters
    - Defult
    - Rest
    - Loop
    - Condition
*/

// function info(userName = "unknown", age = "unknown", rate = "unknown", show = "yes", ...skills) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome ${userName}</h2>`);
//     document.write(`<p>Age ${age}</p>`);
//     document.write(`<p>Hour Rate $${rate}</p>`);
//     if (show === "yes") {
//         if (skills.length > 0) {
//             document.write(`<p>skills: ${skills.join(" | ")}</p>`);
//         } else {
//             document.write(`<p>skills: no skills</p>`);
//         }
//     } else {
//         document.write(`<p>skills is hidden</p>`);
//     }
//     document.write(`</div>`)
// }
// info("Ahmed", 31, 20, "no", "Oracle dba", "Html", "Css", );
//------------------------------------------------------------------------------------------------------------------------

/*
    Function - Random Argument Challenge
    -----
    Creat Function ShowDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend ON Data Types
    - Use Ternary Conditional Operator
*/
// showDetails("osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "osama", 38); // "Hello Osama, Your Age Is 38, You Are not Available For Hire"
//------------------------------------------------------------------------------------------------------------------------

/*
    function
    - Anonymouse Function
    - Calling Named Function vs Anonymouse Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeOut
*/

// let calculator = function (num1, num2) {
//     return num1 + num2;
// };
// console.log(calculator(10, 20));

// function hello() {
//     console.log("Hello Ahmed");
// }

// document.getElementById("show").onclick = hello;

// setTimeout(function () {
//     console.log("Good");
// }, 2000);
// //------------------------------------------------------------------------------------------------------------------------

/*
    Function
    - Function Inside Function
    - Return Function
*/
// Example 1   <<<
// function firstmessage(FirstName, LastName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatenate() {
//         message = `${message} ${FirstName} ${LastName}`;
//     }
//     concatenate();
//     return message;
// }
// console.log(firstmessage("Ahmed", "Naser"));
// ------------

// Example 2    <<<
// function firstmessage(FirstName, LastName) {
//     let message = `Hello`;
//     // Nested Function
//     function concatenate() {
//         return `${message} ${FirstName} ${LastName}`;
//     }
//     return concatenate();
// }
// console.log(firstmessage("Ahmed", "Naser"));
//------------------------------------------------------------------------------------------------------------------------

/*
    Function 
    - Arrow Function
    - Regular vs Arrow [Param + No Param]
    - Multiplae Lines
*/

// function print() {
//     return 10;
// }

// let print = function () {
//     return 10;
// }

// let print = () => 10;

// let print = _ => 10;

// let print = function (num) {
//     return num;
// }

// let print = (num) => num;

// let print = num => num;

// let print = function (num1, num2) {
//     return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));
//------------------------------------------------------------------------------------------------------------------------

/*
    Scope
    - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function inside() { // local scope searching for any variable inside function first if no , directrl get it from global
//     var a = 10;
//     let b = 20;
//     console.log(`function - From Local Scope ${a}`);
//     console.log(`function - From Local Scope ${b}`);
// };

// console.log(`From Global Scope ${a}`); // Global Scope can read anything from function
// console.log(`From Global Scope ${b}`);

// inside();
//------------------------------------------------------------------------------------------------------------------------

/*
    Scope
    - Block Scope [If, Switch, For]
*/

// var x = 10;

// if (10 === 10) {
//     let x = 50; // if we use "let" thats mean if we didnt found anything from local , variable will not working 
//     console.log(`From If Block ${x}`);
// };

// console.log(`From Glocal ${x}`);
//------------------------------------------------------------------------------------------------------------------------

/*
    Scope
    - Lexical Scope

    Search
    - Execution Context
    - Lexical Enviroment
*/

// let a = 10; // all scope take this variable

// function grand() {
//     // let a = 10;  // if  this value no found , take glocal value ,  grand value cant take parent or child value
//     console.log(`Scope From gran ${a}`);
//         function parent() {
//             // let a = 20; // if  this value no found , take up value if not , take glocal value
//             console.log(`Scope From parent ${a}`);
//             function child() {
//                 // let a = 30; // if  this value no found , take up value if not , take glocal value
//                 console.log(`Scope From child ${a}`);
//         }
//         child();
//     }
//     parent();
// }
// grand();
//------------------------------------------------------------------------------------------------------------------------

/*
    Function Arrow Challenges
*/
// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function () {
//     // parameter ... ?
//     return "???";
// }
// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim], => Done !
// /*--------------*/

// // [1] Replace ??? In Return Statment To Get Output
// // [2] Creat The Same Function With Regular Syntax
// // [3] Use Array Inside The Arguments To Get The Output

// let myNumber = [20, 50, 10, 60];

// let calc = (One, Two, ...nums) => "???";

// console.log(calc(10, "???", "???"));  // 80
//------------------------------------------------------------------------------------------------------------------------

/*
    Higher Order Functions
    --- > Is A Function That Accepts Function As parameters And/or Return A Function.

    map
    --- Methods Creats a new Array
    --- Populated With The Results Of Calling a Provided Function On Every Element
    --- In The Calling Array

    Syntax Map (CallBackFunction(Element, Index, Array) {}, thisarg)
    --- Element => The Current Element Being Processes In The Array
    --- Index => The Index Of The Current Element Being Processed In The Array
    --- Array => The Current Array

    Notes
    --- Map Return A New Array

    Examples 
    --- Anonymous Function
    --- Named Function
*/

// let myNum = [1, 2, 3, 4, 5, 6,];

// let newNum =[];

// for (let i = 0; i < myNum.length; i++) {
//     newNum.push(myNum[i] + myNum[i]);
// }
// console.log(newNum);

// -------------------------------
// Same Example With "Map"   <<<<<<<<<<<<<<<<<<<<<<<
// let newExample = myNum.map(function (Element) {
//     return Element + Element
// }, 10);
// console.log(newExample);  

// -------------------------------
// Same Example With "Map & Arrow" <<<<<<<<<<<<<<<<<<<<<<<
// let newExample = myNum.map((Element) => Element + Element);
// console.log(newExample);

// Same Example with another way   <<<<<<<<<<<<<<<<<<<<<<<

// function Addition(ele) {
//     return ele + ele;
// }
// let add = myNum.map(Addition);
// console.log(add);
//------------------------------------------------------------------------------------------------------------------------

/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Boolean Value
*/

// let swappingCases = "Ahmed";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Ah123med";

// let sw = swappingCases.split("").map(function (ele) {
//     // Condition > True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
// });
// console.log(sw);

// arrow version   <<<<<<<<<<<<<<<<<<<<<<<< 
// Condition > True : False
// let sw = swappingCases.split("").map((a) => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
// );
// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//     return -ele;
// }); 
// console.log(inv);

// let ign = ignoreNumbers.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// console.log(ign);
//------------------------------------------------------------------------------------------------------------------------

/*
    Filter
    - Methods Creates A New Array
    - With All Elements That Pass The Test Implemented By The Provided Function

    Syntax Filter(CallBackFunction(Element, Index, Array) {}, Thisarg)
    - Element => The Current Element Being Processes In The Array
    - Index => The Index Of The Current Element Being Processed In The Array
    - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let Friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

//tes Map Vs Filter

// Map
// let addmap = numbers.map(function (el) {    
//     return el + el;
// });
// console.log(addmap);

// Filter
// let addfilter = numbers.filter(function (el) {     
//     return el + el;
// });
// console.log(addfilter);

// Filter with write example (String)
// let filterfriend = Friends.filter(function (el) {
//     return el.startsWith("A") ? true : false;
// });
// console.log(filterfriend);

// // Filter with write example (number)
// let filternumber = numbers.filter(function (el) {
//     return el % 2 === 0 ? true : false;
// });
// console.log(filternumber);
//------------------------------------------------------------------------------------------------------------------------

/*
    Filter
    - Filter Longest Word By Number
*/

// Filter Words More Than 4 Character
// let sentence = "I Love Foood Code Too Playing Much";
// let firstletter = sentence.split(" ").filter(function (el) {
//     return el.length <= 4;
// }).join(" ");
// console.log(firstletter);

// // Ignore Numbers
// let ignorenumbers = "Ah1020med";
// let secondletter = ignorenumbers.split("").filter(function (ele) {   // better than map to return good results
//     return isNaN(parseInt(ele)) ? true : false;
// }).join("");
// console.log(secondletter);

// // Filter Strings + Multiply
// let mix = "Suc9ces8sin7g"
// let lastmix = mix.split("").filter(function (elem) {
//     return !isNaN(parseInt(elem));
// }).map(function (elem) {
//     return elem * elem;
// }).join("")
// console.log(lastmix);
//------------------------------------------------------------------------------------------------------------------------

/*
    Reduce
    - Method Executes A Reduce Function on each Element Of The Array
    - Resulting In A Single Output Value

    Syntax
    Reduce(CallBackFunction(Accumulator, Current Value, Current Index, Source Array) {}, InitialValue)
    - Accumulator => The Accumulated Value Previously Returned In The Last Invocation
    - Current Value => The Current Element Being Processed In The Array
    - Index => The Index Of The Current Element Being Processed In The Array
    --- Start From Index 0 If An InitialValue Is Provided
    --- Otherwise, it Starts From Index 1
    - Array = > The Current Array
*/

// let sum = [10, 20, 15, 30]; // we can add number [5,10, 20, 15, 30] in this Array and we call it (Init)
// let examplesum = sum.reduce(function (Accumulator, Current, index, Array) {
//     console.log(`acc => ${Accumulator}`);
//     console.log(`Current Element = ${Current}`);
//     console.log(`Current Element Index ${index}`);
//     console.log(`Array ${Array}`);
//     console.log(Accumulator + Current);
//     console.log(`#####`);
//     return Accumulator + Current;
// }, 5); // number 5 mean init 
// console.log(examplesum);
//------------------------------------------------------------------------------------------------------------------------

/*
    Reduce
    - Longest Word
    - Remove Characters + Use Reduce
*/

// let thebiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Ahmed-Naser"];
// let removechars = ["E", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let check = thebiggest.reduce(function (Accumulator, Current) {
//     console.log(`acc => ${Accumulator}`);
//     console.log(`Current Element = ${Current}`);
//     console.log(Accumulator.length > Current.length ? Accumulator : Current);
//     console.log(`#####`);
//     return Accumulator.length > Current.length ? Accumulator : Current;
// }); 
// console.log(thebiggest);

// let finalword = removechars.filter(function (ele) {
//     return ! ele.startsWith("@");
// }).reduce(function (Accumulator, Current) {
//     return `${Accumulator}${Current}`;
// });
// console.log(finalword);
//------------------------------------------------------------------------------------------------------------------------

/*
    ForEach
    - Method Excutes A Provided Function Once For Each Array Element

    Syntax ForEach(callBackFunction(Element, Index, Array) {}, thisArg)
    - Element => The Current Element Being Processed In The Array
    - Index => The Index Of The Current Element Being Processed In The Array
    - Array => The Current Array

    Note
    - Doesnt Return Anything [Undefind]
    - Breat Will Not Break The Loop
*/

// let alllis = document.querySelectorAll("ul li");
// let alldiv = document.querySelectorAll(".content div");

// alllis.forEach(function (ele) {
//     ele.onclick = function() {
//         // Remove Active Class From All Element
//         alllis.forEach(function (ele) {
//             ele.classList.remove("active");
//         });
//         // Add Active Class On Any Element
//         this.classList.add("active");
//         // Hide All Divs
//         alldiv.forEach(function (ele) {
//             ele.style.display = "none";
//         })
//     };
// });
//------------------------------------------------------------------------------------------------------------------------

/* 
    Higher Order Function Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cant Use 
    - Umbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain
*/

// let mystring = "1,2,3,AA,H,M,E,D,_,W,e,B,S,C,H,O,o,2,3,0,L";

// let solution = "???";

// console.log(solution); // Ahmed Wen School 
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Intro And What Is Object
    - Testing Window Object
    - Accessing Object
*/
// let user = {Name: "Ahmed", Age: 31, Say: function () { // (Properties - Methods)
//     return `Hello`;
// }};
// console.log(user.Name);
// console.log(user.Age);
// console.log(user.Say());
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Dig Deeper
    - Dot Notation Vs Braket Notation
    - Dynamic Property Name
*/

// let user = { Name: "Ahmed", "Country": "Egypt"};

// console.log(user.Name);
// console.log(user["Name"]);
// console.log(user["Country"]);
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Nested Object And Trinings
*/

// let user = {
//     name: "Ahmed",
//     age: 31,
//     skills: ["CCNA", "CCNP", "MCSA", "SDN", "OracleDBA", "HTML", "CSS", "JS", "Still LEarning"],
//     avilable: false,
//     adresses: {
//         usa: "vegas",
//         egypt: {
//             one: "Alex",
//             two: "zamalak",
//         },
//     },
//     check: function () {
//         if (user.avilable === true) {
//         return `free for work`;
//     } else {
//         return `not free`
//     };
//     }
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills.join(" | "));
// console.log(user.adresses.usa);
// console.log(user.adresses.egypt.one);
// console.log(user.check());
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Creat With New Keyword New Object();
*/

// let user = {};

// console.log(user);

// user.name = "Ahmed";
// user["age"] = 31;

// user.hello = function () {
//     return `hello`
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.hello());
//------------------------------------------------------------------------------------------------------------------------

/*
    Function >This< Keyword
    - This Introduction
    - This Inside Object Method
    -- When a Function Is Called As A Method Of An Object
    -- It's This Is Set To The Object The Method Is Calld On
    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Function Context

    Search
    - Strict Mode
*/

// console.log(this);
// console.log(this === window);

// mytest = 100;

// console.log(window.mytest);
// console.log(this.mytest);

// function test2() {
//     console.log(this);
//     return this;
// }
// test2();
// console.log(test2() === window);

// document.getElementById("cl").onclick = function () {
//     console.log(this);
// };

// let user = {
//     age: 31,
//     test3: function () {
//         return this.age * 365;  // this mean object when you creat it inside 
//     },
// };

// console.log(user.age);
// console.log(user.test3());
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Creat Object With Creat Method
*/

// let user = {
//     age: 40,
//     test: function () {
//         return this.age * 2; // when we use keyword >this< that mean when we take a clone and want to make any change easy
//     },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.test());

// let obj = Object.create({});

// obj.age = 20;

// console.log(obj);

// let copyobj = Object.create(user);

// copyobj.age = 90;

// console.log(copyobj);
// console.log(copyobj.age);
// console.log(copyobj.test());
//------------------------------------------------------------------------------------------------------------------------

/*
    Object
    - Creat Object With Assign Method
*/

// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//         return this.proj1;
//     },
// };

// let obj2 = {
//     prop2: 2,
//     meth2: function () {
//         return this.proj2;
//     },
// };

// let targetobject = {
//     prop1: 1,
//     prop3: 3,
// };

// let finalobject = Object.assign(targetobject, obj1, obj2);
// finalobject.prop1 = 100;
// finalobject.prop4 = 4;

// console.log(finalobject);

// let newobject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
// console.log(newobject);
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom >  Documen Object Model
    - What Is Dom
    - Dom Seletor
        - Find Element By Id
        - Find Element By Tag Name
        - Find Element By Class Name
        - Find Element By Css Selector
        - Find Element By Collection
            - Title
            - Body
            - Images
            - Forms
            - Links
*/

// let ElementID = document.getElementById("my-div")
// let ElementTags = document.getElementsByTagName("p")
// let ClassElement = document.getElementsByClassName("my-span")
// let QueryElement = document.querySelector(".special") // selector we can use it almost with everything
// let QueryElement2 = document.querySelector("#my-div")  
// let QueryAllElement = document.querySelectorAll(".my-span")

// console.log(ElementID);
// console.log(ElementTags);
// console.log(ElementTags[1]);
// console.log(QueryElement);
// console.log(QueryElement2);
// console.log(QueryAllElement);
// console.log(QueryAllElement[1]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.forms[0].one.value);
// console.log(document.links);
// console.log(document.links[1].href);
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Get / Set Element Content And Attributes]
    - innerHTML
    - TextContent
    - Change Attributes Directly
    - Change Attributes With Methods
    --- GetAttribute
    --- SetAttribuet

    Search
    - innerText
*/

// let MyEle = document.querySelector(".Js")

// console.log(MyEle.innerHTML);
// console.log(MyEle.textContent);

// MyEle.innerHTML = "Text From Main <span> Jas </span> File";
// MyEle.textContent = "Text From Main <span> Jas </span> File";

// document.images[0].src ="https://Oldaf.com";
// document.images[0].alt ="Me";
// document.images[0].title ="picture";
// document.images[0].id ="pic";
// document.images[0].className = "img";
// console.log(document.images);

// let mylink = document.querySelector(".link");

// console.log(mylink.getAttribute("class"));
// console.log(mylink.getAttribute("href"));


// mylink.getAttribute("class");
// mylink.getAttribute("href"); 

// mylink.setAttribute("href", "thhps://twitter");
// mylink.setAttribute("title", "Twitter");
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Check Attributes]
    - Element.attributes
    - Element.hasAttribute
    - Element.hasAttributes
    - Element.removeAttribute
*/

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myp = document.getElementsByTagName("p")[0];

// if (myp.hasAttribute("data-src")) {
//     if (myp.getAttribute("data-src") === "") {
//         myp.removeAttribute("data-src");
//     } else {
//         myp.setAttribute("data-src", "New Value");
//     }
// } else {
//     console.log(`No Found`);
// }

// if (myp.hasAttributes()) {
//     console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//     console.log(`Has Attributes`);
// } else {
//     console.log(`Div Has No Attributes`);
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Creat Elements]
    - CreatElement
    - CreatCommet
    - CreatTextNode
    - CreatAttribute
    - AppEndChild
*/

// let myelement = document.createElement("div");
// let myattribute = document.createAttribute("data-custome");
// let mytext = document.createTextNode("Product One");
// let mycomment = document.createComment("This is Div");

// myelement.className = "MyDiv";
// myelement.setAttributeNode(myattribute);
// myelement.setAttribute("data-test", "data-testing");

// myelement.appendChild(mycomment); // Append Commet to Element

// myelement.appendChild(mytext);  // Append text to Element

// document.body.appendChild(myelement);  // Append Element to Body
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Creat Elements]
    - Practice Product With Heading And Paragraph
*/

// let myelement = document.createElement("div");
// let myheading = document.createElement("h2");
// let myp = document.createElement("p");

// let myheadtext = document.createTextNode("product");  // creat h2 text
// let myptext = document.createTextNode("product description");  // creat p text  

// myelement.className = "product";
// myelement.appendChild(myheading);  // put h2 inside div
// myelement.appendChild(myp);  // put p inside div

// myheading.appendChild(myheadtext); // add text to head

// myp.appendChild(myptext);  // add text to paragraph

// document.body.appendChild(myelement);
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Deal With Childrens]
    - Children
    - ChildNodes
    - FirstChild
    - LastChild
    - FirstElementChild
    - LastElementChild
*/

// let myelement = document.querySelector("div");

// console.log(myelement);
// console.log(myelement.children);
// console.log(myelement.children[0]);
// console.log(myelement.childNodes);
// console.log(myelement.childNodes[0]);

// console.log(myelement.firstChild);
// console.log(myelement.lastChild);

// console.log(myelement.firstElementChild);
// console.log(myelement.lastElementChild);
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Events]
    - Use Events ON Html
    - Use Events ON Js
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit
*/

// let mybtm = document.getElementById("btm");

// mybtm.onclick = function () {
//     console.log("clicked");
// };

// window.onsubmit = function () {
//     console.log("everything is good");
// };  
//------------------------------------------------------------------------------------------------------------------------

/*
    DOM [Events]
    - Validate Form Practice
    - Prevent Default
*/
//------------------------------------------------------------------------------------------------------------------------

// let userInput = document.querySelector("[name=`username`]");
// let ageInput = document.querySelector("[name=`age`]");

// console.log(userInput);
// console.log(ageInput);

// document.forms[0].onsubmit = function (e) {
//     let userInput = false;
//     let ageInput = false;

//     if (userInput.value !== "" && userInput.value.length <= 10) {
//         userInput = true;
//     }
//     if (ageInput.value !== "") {
//         ageInput = true;
//     }
//     if (userInput === false || ageInput === false) {
//         e.preventDefault();
//     };
// };

// document.links[0].onclick = function (event) {
//     console.log(event);
//     event.preventDefault();
// };
//------------------------------------------------------------------------------------------------------------------------

/*
    DOM [Events Simulation]
    - Click
    -Focus
    - Blur
*/

// let one = document.querySelector(".One");
// let two = document.querySelector(".Two");

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// };
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Class List]
    - ClassList
    --- Length
    --- Contains
    --- Item(Index)
    --- Add
    --- Remove
    --- Toggle
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("Ahmed"));
// console.log(element.classList.contains("one for test"));
// console.log(element.classList.item("2"));

// element.onclick = function () {
//     element.classList.add("show-one", "show-two");
//     element.classList.toggle("show-toggle");
//     // element.classList.remove("show-one", "show-two");
// };
//------------------------------------------------------------------------------------------------------------------------

/*
    COM [CSS]
    - Style
    - CssText
    - RemoveProperty(PropertyName) [Inline, StyleSheet]
    - SetProperty(PropertyName, Value, Priority)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-wight: bold; color: green; opacity: .5";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
// document.styleSheets[0].cssRules[0].style.setProperty("background-color", "yellow", "important");
//------------------------------------------------------------------------------------------------------------------------

/*
    DOM [Deal With Elements]
    - Before [Element || String]
    - After [Element || String]
    - Append [Element || String]
    - Prepent [Element || String]
    - Remove
*/

// let element = document.getElementById("my-div");
// let creatp = document.createElement("p");

// element.before("Hello From Js");
// element.after(creatp);
// element.append("Hello From JS")
// element.prepend("Hello From JS")
// element.remove();
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Traversing]
    - NextSibbling
    - PreviousSibling
    - NextElementSibling
    - PreviousElementSibling
    - ParentElement
*/

// let span = document.querySelector(".two");

// // console.log(span.nextSibling);
// // console.log(span.previousSibling);

// // console.log(span.nextElementSibling);
// // console.log(span.previousElementSibling);

// // console.log(span.parentElement);

// span.onclick = function () {
//     // span.parentElement.style.opacity = ".5";
//     span.parentElement.remove();
// }
//------------------------------------------------------------------------------------------------------------------------

/*
    Com [Cloning]
    - CloneNode(Deep)
*/

// let mydiv = document.querySelector(".my-div"); 
// let myp = document.querySelector("p").cloneNode(true); // Without anything take just element & attribute , with true take clone from everything

// myp.id = `${myp.id}-new`;

// mydiv.appendChild(myp);
//------------------------------------------------------------------------------------------------------------------------

/*
    Dom [Add Event Listener]
    - AddEventListener
    - Use Without On
    - Attach Multiple Events
    - Error Test

    Search
    - capture & Bubbling JavaScript
    - RemoveEventListener
*/

// let myp = document.querySelector("p");

// myp.onclick = two;
// function one() {
//     console.log("Message From Onlick One");
// };
// function two() {
//     console.log("Message From Onlick Two");
// };

// window.onload = "Oldaf";

// myp.addEventListener("click", function () {
//     console.log("message on click from event")
// });

// myp.addEventListener("click", one);
// myp.addEventListener("click", two);

// myp.addEventListener("click", "string");  // Testing Error Message

// myp.onclick = function () {
//     let newp = myp.cloneNode(true);
//     newp.className = `clone`;
//     document.body.appendChild(newp);
// };

// let cloned = document.querySelector(".clone");

// cloned.onclick = function () {
//     console.log("i'am cloned");
// };

// document.addEventListener("click", function (e) {
//     if (e.target.className === `clone`) {
//         console.log("iam clone");
//     };
// });
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - Introduction
    --- Window Object In The Browser Window
    --- Window Contain The Document Object
    --- All Global Varibles And Object And Function Are Members Of Window Object
    ----- Test Document And Console
    - What we Do With Window Object
    --- Open Window
    --- Close Window
    --- Move Window
    --- Resize Window
    --- Print Document
    --- Run Code After Period Of Time Once Or More
    --- Fully Control The Url
    --- Save Data Inside Browser To Use Later
*/

// window.console.log("Hello From UnderGround");
//------------------------------------------------------------------------------------------------------------------------

/*
    BMO [Browser Object Model]
    - Alert(Message) => Need No Resones ONly Ok Available
    - Confirm(Message) => Need Resonse And Return A Boolean
    - Promp(Messagem Default Message) => Collect Data
*/

// All The Same
// window.alert("Take Care");
// this.alert("Back Again");
// alert("Turn Around");

// let conf = confirm("Are You Sure ?");
// console.log(conf);

// if (conf === true) {
//     console.log("You Select Items Deleted");
// } else {
//     console.log("You Select Items Not Deleted");
// };

// let prompmsg = prompt("when are you available ?", "Write day with time you will be available in...!");
// console.log(prompmsg);
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - setTimeout(Function, Timeotu, Additional Params)
    - clearTimeout(Identifier)
*/

// setTimeout(function () {
//     console.log("This is Message From Space");
// }, 3000);


// setTimeout(One, 3000);
// function One() {
//     console.log("this is message from UnderGround");
// };

// setTimeout(Two, 3000, "Ahmed", 31);

// function Two(user, age) {
//     console.log(`Hello This Is message From JS ${user} His Age Is ${age}`);
// };


// let counter = setTimeout(Two, 3000);

// function Two() {
//     console.log(`Hello This Is message From JS`);
// };

// console.log(counter);

// let press = document.querySelector("button");

// press.onclick = function () {
//     clearTimeout(counter);
// };
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - setInterval(Function, MillSeconds, Additional Params)
    - clearInterval(Identifier)
*/

// setInterval(function () {
//     console.log(`this is first message`);
// }, 1000);

// setInterval(msg, 1000);
// function msg() {
//     console.log(`this is second message`);
// };

// setInterval(Two, 1000, "Ahmed", 31);
// function Two(user, age) {
//     console.log(`hello this is 2x message ${user} and my age is ${age}`);
// };


// let myc = document.querySelector("div");

// function cdown() {
//     div.innerHTML -= 1;
//     if (div.innerHTML === 0) {
//         clearInterval(counter);
//     };
// }

// let counter = setInterval(cdown, 1000);
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - Location Object
    --- href get / set [URL || Hash || File || Mail]
    --- host
    --- hash
    --- protocol
    --- reload()
    --- replace()
    --- assign()
*/
// console.log(location);
// console.log(location.href);
// console.log(location.hash);
// location.href = "https://google.com";
// location.href = "/#sec2";

// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);

// window.location.reload();
// window.location.replace("google.com");
// window.location.assign("google.com");
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - Open(URL [Opt], Window Name Or Target Attr [Opt], Window Feathures [Opt], History Replace [Opy]);
    - Close()
    - Window Features
    --- Width [Num]
    --- height [Num]
    --- Left [Num]
    --- Top [Num]

    search
    - Window Open Window Features
*/

// setTimeout( function () {
//     window.open("http://google.com", "blank", "width=400, height=400, left=250, top=250");
// }, 2000);
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - History API
    --- Properties
    ----- Length
    --- Methods
    ----- back()
    ----- Forward
    ----- go(Delta) => Position In History

    Search [For Advanced Knowledge]
    - PushState() + replaceState()
*/

// console.log(history.length);
// console.log(history.back);
// console.log(history.forward);
// console.log(history.go(1));
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    - stop()
    - print()
    - focus()
    - scroll(x, y || Options)
    - scrollTo(x, y || Options)
    - scrollBy(x, y || Options)
*/

// let nwindow = window.open("http://google.com", "blank", "width=350, height=350, top=250, left=250");

// nwindow.focus();
// nwindow.close();

// window.scroll()
// window.scrollTo(1000, 1000);
// window.scrollBy(1000, 1000);
// window.scrollTo({
//     left: 1000,
//     top: 1000,
//     behavior: "smooth"
// });
//------------------------------------------------------------------------------------------------------------------------

/* // Scroll To Top smooth
    BOM [Browser Object Model]
    - Practice => Scroll To Top
    - scrollX [Alias => PageXoffset]
    - scrollY [Alias => PageXoffset]
    */

    // console.log(window.scrollX === window.pageXOffset);
    // let btn = document.querySelector(".bt");

    // window.onscroll = function () {
    //     if (window.scrollY >= 1000) {
    //         btn.style.display = "block";
    //     } else {
    //         btn.style.display = "none";
    //     };
    // };

    // btn.onclick = function () {
    //     window.scrollTo( {
    //         top: 0,
    //         left: 0,
    //         behavior: "smooth"
    //     });
    // };
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    Local Storage
    - setitem
    - get item
    - removeitem
    - clear
    - key

    info
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab
*/

// set
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "Bold";
// window.localStorage[`fontSize`] = "20px";


// get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Clear All
// window.localStorage.clear();

// Get Key
// console.log(window.localStorage.key(0));

// Set color in page
// document.body.style.backgroundColor = window.localStorage.getItem("color");


// console.log(window.localStorage);
// console.log(typeof window.localStorage);
//------------------------------------------------------------------------------------------------------------------------

/*
    Bom [Browser Object Model]
    Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let mydiv = document.querySelector(".testing");

// if (window.localStorage.getItem("color")) {
//     // If There Is Color In Local Storage
//     // [1] Add Color To Div
//     mydiv.style.backgroundColor = window.localStorage.getItem("color");
//     // [2] Remove Active Class From All Lis
//     lis.forEach((li) => {
//         li.classList.remove("active");
//     });
//     // [3] Add Active Class To Current Color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//     li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//         li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//       // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     mydiv.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });
//------------------------------------------------------------------------------------------------------------------------

/*
    BOM [Browser Object Model]
    session Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    info
    - New Tab = New Session
    - Duplicate Tab = Copy Session
    - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//     console.log(this.value);
//     window.localStorage.setItem("input-name", this.value);
// };
//------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring
    " Is A JavaScript Expression That Allows Us To Extract Data From Arrays,
    Objects, And Maps And Set Them Into New, Distinct Variables"
    - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(myFriends.splice(" | "));
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);
//------------------------------------------------------------------------------------------------------------------------
/*
    Destructuring
    - Destructuring Array Advanced Examples
*/

// let myfriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
// console.log(myfriends[3][2][1]);
// console.log(myfriends);

// let [, , , [a, , [, b]]] = myfriends;

// console.log(a);
// console.log(b);
//------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring
    - Destructuring Array => Swapping Variables
*/

// let book = "video";
// let video = "book";

// Save Book Value In Stash   // This Is Old Way 
// let Stash = book; // video

// Change Book Value 
// book = video; // Book

// Change Video Value
// video = Stash;  // Video

// [book, video] = [video, book];  // This Is Destructuring way (New Way)
// console.log(book);
// console.log(video);
//------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring 
    - Destructuring Object
*/

// const user = {
//     theName: "ahmed",
//     theAge: 31,
//     theTitle: "engineering",
//     theCountry: "egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user);  // this is new way to do objects by destructuring

// const {theName, theAge, theTitle, theCountry} = user;
// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
//------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring 
    - Destructuring Object
    --- Naming The Variables
    --- Add New Property
    --- Nested Object
    --- Destructuring The Nested Object Only
*/

// const user = {
//     theName: "ahmed",
//     theAge: 31,
//     theTitle: "engineering",
//     theCountry: "egypt",
//     thelanguage: "English",
//     skills: {
//         html: 100,
//         css: 97,
//     },
// };

// const {theName: a, theAge: b, theTitle, theCountry, thelanguage: co = "arabic", skills: {html: sk, css: cs}} = user;
// console.log(a);
// console.log(b);
// console.log(theTitle);
// console.log(theCountry);
// console.log(co);
// console.log(`my html skills progress is ${sk}`);
// console.log(`my css skills progress is ${cs}`);

// const {html: firstOne, css: secondOne} = user.skills;
// console.log(`my html skills progress is ${firstOne}`);
// console.log(`my css skills progress is ${secondOne}`);
//------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring
    - Destructuring Function Parameters
*/

// const user = {
//     theName: "ahmed",
//     theAge: 31,
//     theTitle: "engineering",
//     theCountry: "egypt",
//     thelanguage: "English",
//     skills: {
//         html: 100,
//         css: 97,
//     },
// };

// show(user);

// function show(data) {   // Old Way <<<<
//     console.log(`My Name Is ${data.theName}`);
//     console.log(`My Age Is ${data.theAge}`);
//     console.log(`My Skill Progress Is ${data.skills.css}`);
// };

// function show({theName, theAge, theCountry, skills: {css, html}} = user) { // New Way
//     console.log(theName);
//     console.log(theAge);
//     console.log(theCountry);
//     console.log(css, html);
// };

// function show({theName: n, theAge: a, theCountry: c, skills: {css: s, html: h}} = user) {   // New Way With Some Changes
//     console.log(n);
//     console.log(a);
//     console.log(c);
//     console.log(s, h);
// };
// -------------------------------------------------------------------------------------------------------------------------

/*
    Destructuring
    - Destructuring Mixed Content
*/

// const user = {
//     theName: "ahmed",
//     theAge: 31,
//     theTitle: "engineering",
//     theCountry: "egypt",
//     thelanguage: "English",
//     skills: ["HTML", "CSS", "JavaScript"],
//     address: {
//         egypt: "cairo",
//         alex: "over the sea"
//     },
// };

// const {
//     theName: n, 
//     theAge: a, 
//     theTitle: t, 
//     theCountry: c,
//     thelanguage: l, 
//     skills: [one, two, three], 
//     address: {egypt: eg, alex: al}} = user;

//     console.log(`My Name Is: ${n}`);
//     console.log(`My Age is: ${a}`);
//     console.log(`My Job Is: ${t}`);
//     console.log(`My Country: ${c}`);
//     console.log(`My Language ${l}`);
//     console.log(`My Skills: ${one} , ${two} , ${three}`);
//     console.log(`My adress 1 ${eg}`);
//     console.log(`My adress 2 ${al}`);
// -------------------------------------------------------------------------------------------------------------------------

/*
    - Set Data Type
    Syntax: new Set(Interable)
    --- Object To Store Unique Values
    --- Cannot Access Elements By Index

    Properties:
    - Size

    Methods:
    - Add
    - Delete
    - Clear
    - Has
*/

// let mydata = [1, 1, 1, 2, 2, 3, 3, 3, "A"];
// // let myunidata = new Set([1, 1, 1, 2, 2, 3, 3, 3]);
// // let myunidata = new Set(mydata);
// // let myunidata = new Set().add(1).add(2).add(3).add(4).add(5).add(6);
// let myunidata = new Set();
// myunidata.add(1).add(2).add(3).add(4).add("A");

// console.log(mydata);

// console.log(myunidata);

// console.log(myunidata.size);

// console.log(mydata[0]);

// console.log(myunidata[0]);

// myunidata.delete(2);
// myunidata.delete(20);
// myunidata.clear();
// console.log(myunidata.delete(2));
// console.log(myunidata.delete(20));
// console.log(myunidata.clear());

// console.log(myunidata);
// console.log(myunidata.size);

// console.log(myunidata.has("A"));
// -------------------------------------------------------------------------------------------------------------------------

/*
    - Set - Vs WeakSet
    "
        The WeakSet Is Weak,
        Meaning references to object in a WeakSet are held Weakly.
        If no other references to an object stored in the WeakSet exist,
        those objects can be grabage collected.
    "
    Set ...... => Can store any data values
    WeakSet .. => Collection of objects only

    Set ...... => Have size property
    WeakSet .. => Does not have size property

    Set ...... => Have keys, Values, Entries
    WeakSet .. => Does not have Clear, Key, Values, and Entries

    set ...... => Can use ForEach
    WeakSet .. => Cannot use ForEach

    Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data <<<<<
// let myset = new Set([1, 2, 3, 1, 2, 3, "A", "A"]);
// console.log(myset);

// Size  <<<<<
// console.log(`Size Of Elements Inside Set: ${myset.size}`);

// Values + Key [Alias For Values] <<<<<<
// let iterator = myset.keys();
// console.log(iterator);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// ForEach <<<<<
// myset.forEach((ele) => console.log(ele));

// -----------

// Type Of Data <<<<<
// let myws = new WeakSet([{a: 1, b: 2}]);
// console.log(myws);

// Values + Key [Alias For Values] <<<<<< [you cant use it on weakset]
// let iterator = myws.keys();
// console.log(iterator);
// console.log(iterator.next().value);

// ForEach <<<<< [you cant use it on weakset]
// myws.forEach((ele) => console.log(ele));


// console.log("#".repeat(20));
// -------------------------------------------------------------------------------------------------------------------------

/*
    - Map Data Type
    Syntax: new Map(Iterable With Key/Value)
    -- Map vs Object
    --
    ------ Map => Does Not Contain Key By Default
    ------ Object => Has Default Keys
    --
    ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
    ------ Object => String Or Symbol
    --
    ------ Map => Ordered By Insertion
    ------ Object => Not 100% Till Now
    --
    ------ Map => Get Items By Size
    ------ Object => Need To Do Manually
    --
    ------ Map => Can Be Directly Iterated
    ------ Object => Not Directly And Need To Use Object.keys() And So On
    --
    ------ Map => Better Performance When Add Or Remove Data
    ------ Object => Low Performance When Comparing To Map
*/

// let myobject = {};
// let myempetyobject = Object.create(null);
// let mymap = new Map();

// console.log(myobject);
// console.log(myempetyobject);
// console.log(mymap); 

// let mynewobject = {
//     10: "Number",
//     "10": "String",
// };
// console.log(mynewobject[10]);

// let mynewmap = new Map();
// mynewmap.set(10, "Number");
// mynewmap.set("10", "String");
// mynewmap.set(true, "Boolean");
// mynewmap.set({a: 1, b: 2}, "Object");
// mynewmap.set(function dosomething() {}, "function");
// console.log(mynewmap.get(10));
// console.log(mynewmap.get("10"));
// console.log(mynewmap.get(true));

// console.log("#########");

// console.log(mynewobject);
// console.log(mynewmap);
// -------------------------------------------------------------------------------------------------------------------------

/*
    Map Data Type
    Methods
    - Set
    - Get
    - Delete
    - Clear
    - Has

    Properties
    - Size
*/

// let mymap = new Map([
//     [10, "Number"],
//     ["Name", "String"],
//     [false, "boolean"],
// ]);

// Or 
// mymap.set(10, "Number");
// mymap.set("Name", "String");
// mymap.set(fales);

// console.log(mymap);
// console.log(mymap.get(10));
// console.log(mymap.get("Name"));
// console.log(mymap.get(false));

// console.log("#####");
// console.log(mymap.has(false));
// console.log("#####");

// console.log(mymap.size);
// console.log(mymap.delete(10));
// console.log(mymap.size);
// mymap.clear();
// console.log(mymap.size);
// -------------------------------------------------------------------------------------------------------------------------

/*
    Map Vs WeakMap
    "
    - WeakMap Allows Garbage Collector To Do Its Task But Not Map.
    "
    Map ....... => Key Can Be Anything
    WeakMap ... => Key Can Be Object Only
*/

// let mapUser = { theName: "Oldaf"};

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// // mapUser = null;  // Override The Reference

// console.log(myMap);

// console.log("#".repeat(20));

// let wMapUser = { theName: "Tarotus"};

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// // wMapUser = null;  // Override The Reference

// console.log(myWeakMap);
// -------------------------------------------------------------------------------------------------------------------------

/*
    Array Methods
    - Array.From(Iterable, MapFunc, This)
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Functino
    --- Shorten The Method + Use Arguments 
*/

// console.log(Array.from("Osama"));

// console.log(Array.from("12345", function (n) {
//     return +n + +n;
// })
// );

// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]); // Future

// function af() {
//     return Array.from(arguments);
// }

// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Array Methods
- Array.copyWithin(Target, Start => Optional, End => Optional)
"Copy Part Of An Array To Another Location in The Same Array"
- Any Negative Value Will Count From The End

- Target
--- Index To Copy Part To
--- If At Or Greater Than Array Length Nothing Will Be Copied
- Start
--- Index To Start Copying From
--- If Ommited = Start From Index 0

- End
--- Index To End Copying From
--- Not Including End
--- If Ommited = Reach The End
*/

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);
//-------------------------------------------------------------------------------------------------------------------------

/*
    Array Methods
    - Array.some(Callbackfunc(Element, Index, Array), This Aregument)
    -- Callbackfun => Function To Run On Every Element On The Given Array
    --- Element => The Current Element Element
    --- Index => Index Of Current Element
    --- Array => The Current Array Working With
    -- This Argument => Value To Use As This When Executing Callbackfunc

    Using
    - Check If Element Exists In Array
    - Check If Number In Range
*/

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19];
// let mynum = 8;

// // let check = num.some(function (e) {
// //     console.log("test");
// //     return e > 5;
// // });

// let check = num.some(function (e) {
//     return e > this;
// }, mynum);

// // or 

// // let check = num.some((e) => e > 5);

// console.log(check);

// function checkvalue(arr, val) {
//     return arr.some(function(e) {
//     return e === val
//     });
// }

// console.log(checkvalue(num, 20));
// console.log(checkvalue(num, 5));

// let range = {
//     min: 10,
//     max: 20,
// };
// let checknum = num.some(function(e) {
//     // console.log(this.min);
//     // console.log(this.max);
//     return e > this.min && e > this.max
// }, range);
//-------------------------------------------------------------------------------------------------------------------------

/*
    Array Methods
    - Array.every(Callbackfunc(Element, Index, Array), This Aregument)
    -- Callbackfun => Function To Run On Every Element On The Given Array
    --- Element => The Current Element To Process
    --- Index => Index Of Current Element
    --- Array => The Current Array Working With
    -- This Argument => Value To Use As This When Executing Callbackfunc
*/

// const locations = {
//     40: "Place1",
//     30: "Place2",
//     20: "Place3",
//     10: "Place4",  // or 19
// };

// let minlocation = 15;

// let locationarray = Object.keys(locations);
// console.log(locationarray);

// let locationnumber = locationarray.map((n) => +n);
// console.log(locationnumber);

// let locationcheck = locationnumber.every(function(e) {
//     return e > this;
// }, minlocation);
// console.log(locationcheck);
//-------------------------------------------------------------------------------------------------------------------------

/*
    Spread Operator => ...Iterable
    "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
// console.log("Ahmed");
// console.log(..."Ahmed");
// console.log([..."Ahmed"]);

// // Concatenate Arrays
// let myarray1 = [1, 2, 3];
// let myarray2 = [4, 5, 6];
// let allarray = [...myarray1, ...myarray2];
// console.log(allarray);
// console.log([...myarray1, ...myarray2]);

// // Copy Array
// let myCopyArray = [...myarray1];
// console.log(myCopyArray);

// // Push Inside Array
// let allFriend = ["Sayed", "Amro", "Maged"];
// let newFriend = ["Ahmed", "Mohamed"];
// allFriend.push(...newFriend);
// console.log(allFriend);

// // Use With Math Object
// let mynum = [10, 20, 100, 200, 1000];
// console.log(Math.max(...mynum));

// // Spread With Objects => Merge Objects
// let object1 = {
//     a: 1,
//     b: 2,
// };
// let object2 = {
//     c: 3,
//     D: 4,
// };
// console.log({...object1, ...object2, e: 5});
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    - Email
    - IP
    - Phone
    - URL
*/

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'ahmed@@@gmail....com';
// let validEmail = 'a@egytrade.it';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression

    Syntax
    /pattern/modifier(s);
    new RegExp("pattern", "modifier(s)")

    Modifiers => Flags
    i => case-insensitive
    g => global
    m => Multilines

    Search Methods
    - match(Pattern)

    Match
    -- Matches A String Against a Regular Expression Pattern
    -- Returns An Array With The Matches
    -- Returns null If No Match Is Found.
*/

// let myString = "Hello Oldaf Web School I Love oldaf";

// let regex = /oldaf/ig;

// console.log(myString.match(regex));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Ranges

    - Part 1
    (X|Y)  => X Or Y
    [0-9]  => 0 To 9
    [^0-9] => Any Character Not 0 To 9
    Practice

    - Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]
*/

// let tld = ("Com Net Org Info Code Io It");
// let tldRe = /com|org|io/ig;
// console.log(tld.match(tldRe));

// let nums = "1234567890";
// // let numRe = /[0-9]/g;
// // or
// // let numRe = /[0-9]/;
// // or
// let numRe = /[0-2]/g;
// console.log(nums.match(numRe));

// let Notnum = "1234567890";
// let NotnumRe = /[^0|2]/g;
// console.log(Notnum.match(NotnumRe));

// let SpecialNum = "1!2@3#4$5%6^7&8*90";
// let SpecialNumRe = /[^0-9]/g;
// console.log(SpecialNum.match(SpecialNumRe));

// let practiceNum = "Os1 Os1Os Os2 Os8Os";
// let practiceNumRe = /os[5-9]os/ig;
// console.log(practiceNum.match(practiceNumRe));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Ranges

    - Part 1
    (X|Y)  => X Or Y
    [0-9]  => 0 To 9
    [^0-9] => Any Character Not 0 To 9
    Practice

    - Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]
*/

// let myString = "AaBbcdeFG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Character Classes
    .  => matches any character, except newlinw or other line terminators.
    \W => matches word characters [a-z, A-Z, 0-9 And Underscore]
    \W => matches Non word characters
    \d => matches digits from 0 to 9.
    \D => matches non-digit characters.
    \s => matches whitespace character.
    \S => matches non whitespace character.
*/

// let email = `O@@@...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com`;

// let dot = /./g;
// let Character = /\w/g;
// let nonCharacter = /\W/g;
// let valid = /\w@\w(.com|.net)/g;

// console.log(email.match(dot));
// console.log(email.match(Character));
// console.log(email.match(nonCharacter));
// console.log(email.match(valid));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Character Classes
    \b => matches at the beginning or end of a word
    \B => matches Not at the beginning/end of a word

    Test Method
    pattern.test(input)
*/

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo"
// let re = /spam/ig;
// let rebstart = /\bspam/ig;
// let rebend = /spam\b/ig;
// let reball = /(\bspam|spam\b)/ig;

// console.log(names.match(re));
// console.log(names.match(rebstart));
// console.log(names.match(rebend));
// console.log(names.match(reball));

// console.log(/(\bspam|spam\b)/ig.test("ahmed"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Quantifiers
    n+.....=> one Or More
    n*.....=> Zero Or More
    n?.....=> Zero Or One
*/  

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Quantifiers
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    Quantifiers
    $  => End With Something
    ^  => Start With Something
    ?= => Followed By Something
    ?! => Not Followed By Something
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    - replace
    - replaceAll
    */

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));
//-------------------------------------------------------------------------------------------------------------------------

/*
    Regular Expression
    - Input From Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//     let phoneInput = document.getElementById("phone").value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/ig;    // (1234) 567-8910
//     let valeResult = phoneRe.test(phoneInput);
//     if(valeResult === false) {
//         return false;
//     } else {
//         return true;
//     }
// }
//-------------------------------------------------------------------------------------------------------------------------

/*
    Constructor Function
*/

// function User(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
// };

// let userOne = new User(100, "Ahmed", 3000);
// let userTwo = new User(101, "Mohamed", 6000);
// let userThree = new User(102, "Oldaf", 9000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);


// const userOne = {      // all this is old way 
//     id: 100,
//     username: "Ahmed",
//     salary: 3000,
// };

// const userTwo = {
//     id: 101,
//     username: "Mohamed",
//     salary: 6000,
// };

// const userthree = {
//     id: 102,
//     username: "Oldaf",
//     salary: 9000,
// };

// console.log(userOne);
// console.log(userTwo);
// console.log(userthree);
//-------------------------------------------------------------------------------------------------------------------------

/*
    Constructor Function
    - New Syntax
*/

// class User {
//     constructor(id, username, salary) {
//         this.i = id;
//         this.u = username;
//         this.s = salary;
//     }
// };

// let one = new User(100, "Ahmed", 3000);
// console.log(one.i);
// console.log(one.u);
// console.log(one.s);

// console.log(one instanceof User);
// console.log(one.constructor === User);
//-------------------------------------------------------------------------------------------------------------------------








