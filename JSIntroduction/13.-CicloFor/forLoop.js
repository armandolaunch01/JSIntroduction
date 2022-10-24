console.log("Using for loop");

var myArray = [];

for (var i = 0; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray);

console.log("This is another example ");

var myArray = [];

for (var i = 1; i < 20; i += 2) {
    myArray.push(i);
}

console.log(myArray);

var myArray = [];

for (var i = 2; i <= 26; i += 2) {
    myArray.push(i);
}

console.log(myArray);

console.log("For loop 'COUNT DOWN'");

for (var i = 15; i >= 10; i--) {
    console.log(i);
}


var myArray = [];

for (var i = 10; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray);

console.log("ITERATING OVER AN ARRAY WITH A FOR LOOP");

var myArray = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < myArray.length; i++) {
    console.log("Iteration " + i);
    console.log(myArray[i]);
    total += myArray[i];
}
console.log(total);

var languages = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < languages.length; i++) {
    console.log(languages[i].toUpperCase());
}


console.log("Example using a function");

function countEvenNumbers(array) {
    var total = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            total++;
        }
    } //end for loop

    return total;
} //end function countEvenNumbers

console.log(countEvenNumbers([3, 4, 7, 8, 10, 12, 34, 54, 55, 65, 67, 48, 42, 678, 53, 24, 32]));

console.log("Nested for loop example".toUpperCase());

var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < myArray.length; i++) {
    //console.log(myArray[i]);
    console.log("> New iteration: ");
    var nestedArray = myArray[i]; //Array
    console.log("Array: " + nestedArray);

    for (var j = 0; j < nestedArray.length; j++) {
        console.log(">>> Nested loop");
        console.log("Element: ");
        console.log(nestedArray[j]); //Element
    }
}