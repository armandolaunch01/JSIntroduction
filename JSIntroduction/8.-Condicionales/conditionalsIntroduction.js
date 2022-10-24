/*//IF

if ("condition"){

    //Instruction sequence
}*/

/*True table AND operator
For: X && Y
X  |  Y  |  X  &&  Y
--------------------
T     T         T
T     F         F
F     T         F
F     F         F

Expression in true  only when both operands are true
*/
console.log("USING IF AND ELSE CONDITION")
var x = 5;

if ((x <= 5) && (x == 5)) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

var station = "Winter";

if (station == "Winter") {
    console.log("Yes!!! I love winter");
}

console.log("After conditional");

//ELSE CLAUSE
console.log("ELSE CLAUSE");
if (false) {
    console.log("Condition is true");
} else {
    console.log("Conditional is false");
}

var x = 5;

if (x < 2) {
    console.log("Conditional is true");
} else {
    console.log("Conditional is false");
}

var station = "Summer";

if (station == "Summer") {
    console.log("Summer starts, we already go to the beach")
} else {
    console.log("I already want summer arrive for we can go to the beach");
}

//ELSE IF CLAUSE

console.log("ELSE IF CLAUSE");

function rankValue(value) {
    if (value % 2 == 0) {
        console.log("Divisible between 2");
    } else if (value % 3 == 0) {
        console.log("Divisible between 3")
    } else {
        console.log("Value isn't divisible between the options");
    }
}

rankValue(2);
rankValue(15);
rankValue(7);

//CONDITIONALS: LOGIC ORDER

console.log("Conditionals: Logic order");

function rankValueOne(value) {
    if (value < 5) {
        console.log("Less than 5");
    } else if (value < 10) {
        console.log("Less than 10");
    } else {
        console.log("Greater or equal 10");
    }
}

rankValueOne(2);
rankValueOne(9);
rankValueOne(15);

//SENTENCES CHAINING "IF...ELSE"
console.log("SENTENCES CHAINING 'IF... ELSE'");

function MCIinterpreter(bmi) {
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi <= 24.9) {
        console.log("Normal");
    } else if (bmi <= 29.9) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

MCIinterpreter(17.8);
MCIinterpreter(22.2);
MCIinterpreter(28.5);
MCIinterpreter(50);