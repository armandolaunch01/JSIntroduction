console.log(parseInt("5"));

var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);

console.log("parseInt() function whit base");

console.log("Binary");
console.log(parseInt(111001011, 2));

console.log("Hexadecimal");

console.log(parseInt("FA5EFD53", 16));

console.log("Conditional Operator 'Ternary Operator'");

/*function minimumReturn(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}*/

//Implementing ternary operator
function minimumReturn(x, y) {
    return x < y ? x : y;
}



console.log(minimumReturn(6, 5));
console.log(minimumReturn(12, 4));
console.log(minimumReturn(8, 21));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);