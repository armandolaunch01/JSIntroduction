console.log("var vs let intro");

//Using var

var designer = "david";

var designer = "Carlos";

console.log(designer);

//Using let

let developer = "Charlie";

developer = "James";

console.log(developer);

console.log("var vs let scope");


var myGlobalVariable = 4;

console.log(myGlobalVariable);

function myFunction() {
    console.log(myGlobalVariable);

    var myLocalVariable = 10;
    console.log(myLocalVariable);
}

myFunction();

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("variable: " + i);

for (var a = 0; a < 10; a++) {
    console.log(a);
}
console.log("variable a :" + a);

var showColor;

if (showColor) {
    let color = "green";
    console.log("My favorite color is: " + color);
}