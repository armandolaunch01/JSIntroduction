//Equal operator ==

console.log(5 == 5);
console.log(5 == 9);

console.log("Hello" == "Hello");
console.log("Hello" == "Hello");

//Equal Strict Operator
console.log("STRICT EQUAL OPERATOR")
console.log(9 === "9");
console.log(9 === 9);

//Values comparing practice

console.log("Strict equal example");

var a;
var b;

a = 5;
b = 9;

console.log(a == b);
console.log(a === b);

b = "5";
console.log(a == b);
console.log(a === b);

console.log("INEQUALITY OPERATOR");

console.log(9 != 6);
console.log(9 != 9);

console.log("Javas Script" != "Java Script");

console.log([1, 2, 3] != [1, 2, 3]);

//INEQUALITY STRICT

console.log("INEQUALITY STRICT");
//Inequality operator
console.log(1 != "1");
//Inequality strict operator
console.log(1 !== "1");

//GREATER THAT OPERATOR

console.log("GREATER THAN OPERATOR");

console.log(5 > 5); //false
console.log(6 > 5); //true

console.log(3 > 10);

console.log("B" > "A");

console.log("ACB" > "ABC");
console.log("BCA" > "CAB");

console.log("AB" > "A");

console.log("World" > "Hello");
console.log("W" > "H");

var x = 10;
var y = 6;
console.log(x > b);
console.log(y > b);

//GREATER OR EQUAL THAN OPERATOR
console.log("GREATER OR EQUAL THAN OPERATOR");

console.log(45 > 45); //false
console.log(45 >= 45); //true

//LESS THAN OPERATOR
console.log("LESS THAN OPERATOR");
console.log(5 < 6); //true
console.log(6 < 6); //false

console.log("A" < "B");
console.log("ABD" < "BDC");

var w = 7;
var v = 6;
console.log(w < 6);
console.log(v < w);

//LESS OR EQUAL THAN OPERATOR

console.log("LESS OR EQUAL THAN OPERATOR");

console.log(5 < 5); //false
console.log(5 <= 5); //true

//LOGIC OPERATOR

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
console.log("AND OPERATOR '&&'");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
//Example with variable
var x = 6;
console.log((x > 5) && (x < 10));

//OR OPERATOR

console.log("OR OPERATOR \"||\"");
/*True table AND operator
For: X || Y
X  |  Y  |  X  &&  Y
--------------------
T     T         T
T     F         T
F     T         T
F     F         F

Expression in false  only when both operands are true
*/

console.log("OR OPERATOR '||'");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var a = 8;
console.log((a < 5) || (a > 15)); //false
var a = 20;
console.log((a < 5) || (a > 15)); //true
var a = 5;
console.log((a == 5) || (a < 15)); //true
console.log((a < 5) || (a > 15));

//NOT OPERATOR
console.log("NOT OPERATOR '!X' ");

/*
FOR: !X
|  X  |  !X  |
   T      F
   F      T
*/

console.log(!true);
console.log(!false);

var a = 8;
//!(a > 5) --> !true --> false
console.log(!(a > 5));
//!(a < 5) --> !false --> true
console.log(!(a < 5));