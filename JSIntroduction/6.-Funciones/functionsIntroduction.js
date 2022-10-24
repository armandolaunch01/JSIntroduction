function showMessage() {
    console.log("Hello, World!!!");
}

showMessage();

//Arguments

console.log("Arguments 'Parameters'");

function addition(a, b) {
    add = a + b;
    console.log("THe result of " + a + " + " + b + " is: " + add);
}

var x = 4;
var y = 30;
addition(x, y);
addition(40, 60);
addition(5, 5);
addition(4, 6);

function threeStringConcatenation(string1, string2, string3) {
    console.log(string1 + " " + string2 + " " + string3);
}

threeStringConcatenation("Hello", "World", "friends");


//Global Scope

//Global and local variables

//Global variable example (GLOBAL SCOPE)
var myVariable = 5;

console.log(myVariable);

function myFunction() {
    console.log(myVariable);
}

myFunction();

//Local variable example (LOCAL SCOPE)

function localVariableFunction() {
    var myLocalVariable = 34;
    console.log(myLocalVariable);
}

localVariableFunction();

//console.log(myLocalVariable);

var myName = "Armando";

//Local variable is most important into function
console.log("Local Variable");

function showName() {
    var myName = "Gino";
    console.log(myName);
}

showName();
console.log("Global Variable")
console.log(myName);

//Return

function addTest(a, b) {
    return a + b;
}

console.log(addTest(4, 5));

//UNDEFINED

function add1(a, b) {
    console.log(a + b);
    return a + b;
}
add1(4, 4);
console.log(add1(5, 3));

//Function return values by default is undefined

//RETURN VALUE ASSIGNMENT

function sum(a, b) {
    return a + b;
}
//We can storage the result value into a variable
var result = sum(50, 50);
console.log(result);

function GoalStringMaking(programmingLanguage) {
    return "My goal is learn " + programmingLanguage;
}

var myGoal = GoalStringMaking("JavaScript");
console.log(myGoal);