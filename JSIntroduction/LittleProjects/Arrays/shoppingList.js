let myShoppingList = [
    ["cereal", 3],
    ["soda", 6],
    ["Milk", 5],
    ["Chicken", 2]
];

/**
 Array:         ["cereal", 3],["soda", 6],["Milk", 5], ["Chicken", 2]
 Index:             0               1           2           3                           
 InternIndex:       0      1     0     1      0    1      0        1
 */
//Cereal
console.log("I'm gonna buy " + myShoppingList[0][1] + " units of " + myShoppingList[0][0] + ".");

//Milk
console.log("I'm gonna buy " + myShoppingList[1][1] + " units of " + myShoppingList[1][0] + ".");

//Soda
console.log("I'm gonna buy " + myShoppingList[2][1] + " units of " + myShoppingList[2][0] + ".");

//Protein
console.log("I'm gonna buy " + myShoppingList[3][1] + " units of " + myShoppingList[3][0] + ".");