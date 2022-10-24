console.log("USING length")

let myString;
myString = "A B";
console.log(myString.length);

let mySecondString;
mySecondString = "JavaScript";
console.log(mySecondString.length);

let myThirdString;
myThirdString = "I´m learning JavaScript programming";
console.log(myThirdString.length);

console.log("Brackets notation: First Character");

let programmingLanguage = "JavaScript";

/*
String: J a v a S c r i p t
Index   0 1 2 3 4 5 6 7 8 9
*/
console.log(programmingLanguage[0]);

console.log("IMMUTABILITY STRINGS");

//IMMUTABILITY
let myStringTwo = "Jello, World";

console.log(myStringTwo);

//myStringTwo = "H"; //Error
myStringTwo[0] = "H";
console.log(myStringTwo);
console.log(myStringTwo[0]);
myStringTwo = "Hello, World";
console.log(myStringTwo);

console.log("Brackets notation: Umpteenth Character");
let myStringThird = "JavaScript";

console.log(myStringThird[0]); //J
console.log(myStringThird[1]); //a
console.log(myStringThird[2]); //v
console.log(myStringThird[3]); //a

console.log(myStringThird[10]); //J

console.log("Brackets notation: Last Character");

let myStringFourth;

/*
The last character always is -1 length because we start counter from 0
myStringFourth.length for "JavaScript" is 10

The last index is 9

String: J a v a S c r i p t
Index   0 1 2 3 4 5 6 7 8 9

*/

myStringFourth = "JavaScript";
console.log(myStringFourth[myStringFourth.length - 1]);

myStringFourth = "Metallica";
console.log(myStringFourth[myStringFourth.length - 1]);

console.log("Brackets notation: From Right to left");

var myStringFive;
let n;
/*
Penultimate index is longitude -2

myStringFive.length is 10 The penultimate index is 8

*/

myStringFive = "JavaScript";
n = 2;
console.log(myStringFive[myStringFive.length - n]);