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
