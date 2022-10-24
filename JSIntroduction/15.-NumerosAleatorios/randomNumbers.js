console.log("DECIMAL RANDOM NUMBERS");

function generateRandomFraction() {
    return Math.random();
}

console.log(generateRandomFraction())

var randomNumber = Math.random();

console.log(randomNumber);

console.log("INTEGER RANDOM NUMBERS");

//Using floor method to get a truncated number 

var integerRandomNumberBetween0y19 = Math.floor(Math.random() * 20);

console.log(integerRandomNumberBetween0y19);


function generateRandomInteger(upperLimit) {
    //Generate a random integer between 0 and upperLimit(not including)
    return Math.floor(Math.random() * upperLimit);
}
for (var i = 0; i < 15; i++) {

    console.log(generateRandomInteger(5));
}

console.log("RANDOM INTEGERS WITHIN RANGE");

function randomRange(upperLimit, lowerLimit) {
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

for (var i = 0; i < 10; i++) {
    console.log(randomRange(8, 3));
}