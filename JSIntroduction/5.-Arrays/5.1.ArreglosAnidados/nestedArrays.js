//Arrays can storage any kind of variables

let studentsList = [
    ["Nora", 90],
    ["Gino", 80]
];

console.log(studentsList);

let productList = [
    ["shirt", 6.36],
    ["Cellphone", 697.65],
    ["Shoes", 62.5]
];

console.log(productList);

let data = [
    [3.4, 54.5, 45.6, 64.7],
    [4.6, 5.6, 4.45, 7.6],
    [24.3, 12.43]
];

console.log(data, data.length);

console.log("GET Array Elements");

/*
Array: [10, 20, 30]
Index:   0,  1,  2 ]
*/

let myArray = [10, 20, 30];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

let add = myArray[0] + myArray[1] + myArray[2];
console.log(add);

console.log("MODIFYING ARRAY ELEMENTS");

let myArrayTwo = [10, 20, 30];

myArrayTwo[0] = 40;
myArrayTwo[1] = "Hell0";
myArrayTwo[2] = [{
    'name': "pedro",
    'lastName': "Jimenez"
}];

console.log(myArrayTwo);

console.log("Multidimensional Array accessing");

let otherArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/*
Array:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Index:              0           1          2
InterIndex:       0  1  2    0  1  2    0  1  2
*/
console.log(otherArray[0]);
console.log(otherArray[1]);
console.log(otherArray[2]);
console.log("Accessing to a specific element");
console.log(otherArray[0][0]);
console.log(otherArray[0][1]);
console.log(otherArray[0][2]);
console.log(otherArray[1][0]);
console.log(otherArray[1][1]);
console.log(otherArray[1][2]);
console.log(otherArray[2][0]);
console.log(otherArray[2][1]);
console.log(otherArray[2][2]);

//PUSH

//Array elements Adding
console.log("Array elements Adding \"PUSH\"");

let stations = ["Winter", "Autumn", "Summer"];
//console.log(stations);

stations.push("Spring");
console.log(stations);

console.log("REMOVE THE LAST ELEMENT OF AN ARRAY 'POP' ");
let stations2 = ["Winter", "Autumn", "Summer", "Spring"];
console.log(stations2);
//STORAGE THE REMOVED ELEMENT
let station;
station = stations2.pop();

console.log(station);

//SHIFT

console.log("Remove the first element '.shift()'");

let stations3 = ["Winter", "Autumn", "Summer", "Spring"];

stations3.shift();
console.log(stations3);

//UNSHIFT
//Adding a new element at the beginning of the array
console.log("Add a new element at the beginning of the array '.unshift()'");
let stations4 = ["Winter", "Autumn", "Summer", "Spring"];
stations4.unshift("other station");
console.log(stations4);