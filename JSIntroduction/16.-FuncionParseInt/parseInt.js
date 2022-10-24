//console.log(parseInt("5.6"));

console.log("parseInt() function example");

//var a = "5";
//var b = "7";

var a = parseInt("5");
var b = parseInt("7");
console.log(a + b);

console.log("parseInt() function with a base".toUpperCase());

console.log(parseInt("1010101011011", 2));

console.log(parseInt("F3A5E", 16));

console.log("conditional operator (Ternary)".toUpperCase());

function minimumReturn(x, y) {
    /*if (x < y) {
        return x;
    } else {
        return y;
    }*/
    //Its the same 
    return x < 7 ? x : y;
}

console.log(minimumReturn(4, 7));

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);

console.log("Multiple conditional operators".toUpperCase());

function numberComparing(a, b) {
    /*if (a == b) {
        return "a and b are equals";
    } else if (a > b) {
        return "a is major than b";
    } else {
        return "b is less than a";
    }*/

    return a == b ? "a and b are equals" :
        a > b ? "a is major than b" :
        "b is major than a";
}

console.log(numberComparing(6, 2));
console.log(numberComparing(10, 364));
console.log(numberComparing(50, 50));