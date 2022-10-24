let name = 'Alan ÿ@0@▼♥4♠4656@○7•8J♦♠';
console.log(name);

let lastName = "Turing";

console.log(name, lastName);

//Escape to quotation

let myString = "I´m a string \"with quotation\"";
console.log(myString);

//STRINGS WITH SIMPLE QUOTATIONS
console.log("STRING WITH SIMPLE QUOTATIONS EXAMPLE");

let myGoal;

//myGoal = "Learn programming with \"freeCodeCamp\"";
myGoal = "Learn programming with 'freeCodeCamp'";

console.log(myGoal);
myGoal = 'Learn programming with "freeCodeCamp"';
console.log(myGoal);

//SCAPE SEQUENCE

/*
SCAPE SEQUENCES
Code |  Result
\'      Simple quotation
\"      Double quotation
\\      Backslash
\n      New line
\r      Car return
\t      Tabulation
\b      Recoil
\f      Page break      
*/

console.log("Example with double quotation \"JS\"");
console.log('Example with simple \"quotation\" ');
console.log("Example with simple \'quotation\'");
console.log("Example backslash is this \\ JavasScript");
console.log("Example New line: \nJS")

//STRING CONCATENATION

let completeName = "Alan" + " Turing";
//let completeName = "Alan" + " " + "Turing";
console.log(completeName);

//Build string variables

let verb = "Programming";

let message = "I´m learning to " + verb + " with FreeCodeCamp";
console.log(message);

//Add variables to Strings

let completeMessage = "I'm learning programming";
let finalPart = " with FreeCodeCamp";
console.log(completeMessage)

completeMessage += finalPart;
console.log(completeMessage);