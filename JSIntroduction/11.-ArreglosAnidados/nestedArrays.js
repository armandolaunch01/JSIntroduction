//NESTED ARRAYS

console.log("NESTED ARRAYS");

var myPlants = [{
        type: "flowers",
        list: [
            "roses",
            "tulips",
            "Lion teeth"
        ]
    },
    {
        type: "trees",
        list: [
            "spruce",
            "pine",
            "brunch"
        ]
    }
];

//console.log(myPlants);

let firstFlower = myPlants[0].list[0];
let secondFlower = myPlants[0].list[1];
let thirdFlower = myPlants[0].list[2];


let firstTree = myPlants[1].list[0];
let secondTree = myPlants[1].list[1];
let thirdTree = myPlants[1].list[2];

console.log(firstFlower);
console.log(secondFlower);
console.log(thirdFlower);

console.log(firstTree);
console.log(secondTree);
console.log(thirdTree);