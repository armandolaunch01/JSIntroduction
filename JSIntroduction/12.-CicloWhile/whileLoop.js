//The are two types of loop (iteration)
//Loop while
//Loop for
console.log("This is a While loop");
var i = 0;

while (i <= 15) {
    console.log("Hello World!!!");
    i++;
};

console.log("Example");
var myArray = [];
var i = 0;

console.log(myArray);

while (i <= 10) {
    myArray.push(i);
    i++;
}
console.log(myArray);


var numbers = [2, 3, 4, 5, 6, 7];

while (numbers.length > 4) {
    numbers.pop();
}

console.log(numbers);