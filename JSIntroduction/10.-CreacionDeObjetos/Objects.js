//OBJECTS
console.log("Objects creation")
    //Example
var myDog = {
    "name": "Kol",
    "weight": 20,
    "age": 5,
    "race": "Kol"
};

//Property Access: Point Notation
console.log("Property Access: Point Notation");

var myCat = {
    "name": "Fat",
    "age": 4,
    "weight": 4
};

console.log(myCat.name);
console.log(myCat.age);
console.log(myCat.weight);

//Property access: Brackets Notation
console.log("Property Access: Brackets Notation");

var myBook = {
    "color": "green",
    "category": 3,
    "pageNumber": 300,
    "sheetsNumber": 150
};
//Point notation
console.log(myBook.color);
console.log(myBook.sheetsNumber);
//Brackets notation
console.log(myBook["color"]);
console.log(myBook["pageNumber"]);

//PROPERTY ACCESS: VARIABLES

console.log("Property access: Variables");

var results = {
    1: "Armando",
    2: "Thomas",
    3: "Miriam",
    4: "Karla"
};
var position = 4;
var position2 = 3;
var position3 = 2;
var position4 = 1;


console.log(results[position]);
console.log(results[position2]);
console.log(results[position3]);
console.log(results[position4]);

//Update properties 

console.log("Property Update");

var myBackPack = {
    "color": "blue",
    "size": "medium",
    "content": [" Water bottle,", "apple", "book"]
};

console.log(myBackPack.color); //blue

//Updating

myBackPack.color = "green";
console.log(myBackPack.color); //green


console.log(myBackPack.content);
myBackPack.content.push("pencil");

console.log(myBackPack.content);

//Complete Array change

myBackPack.content = [];

console.log(myBackPack.content);

//ADD PROPERTIES 

console.log("ADDING PROPERTIES");

var course = {
    "title": "Learn JavaScript programming",
    "language": "English",
    "duration": 30,
};

course.views = 5000;
//course["views"];// is the same
console.log(course.views);
console.log(course);

//Properties Drop
console.log("Deleting properties !!!");

var courseTwo = {
    "title": "Learn JavaScript programming",
    "language": "English",
    "duration": 30,
};

console.log(courseTwo.language);
delete courseTwo.language;

console.log(courseTwo.language);

//OBJECTS FOR SEARCH
console.log("Objects for search");

function chemicalElementSearch(symbol) {
    //var chemicalElement;

    //Object to Associate symbols with its elements

    var chemicalSymbols = {
        'Al': "Aluminum",
        'S': "Sulfur",
        'Ch': "Chlorine",
        'Hl': "Helium",
        'B': "Boron"
    };



    /*switch (symbol) {
        case 'Al':
            chemicalElement = "Aluminum";
            break;
        case 'S':
            chemicalElement = "Sulfur";
            break;
        case 'Ch':
            chemicalElement = "Chlorine";
            break;
        case 'Hl':
            chemicalElement = "Helium";
            break;
        case 'B':
            chemicalElement = "Boron";
    }*/
    return chemicalSymbols[symbol];
};

console.log(chemicalElementSearch("Al"));

//Verify properties

console.log("Verify properties");

var myBook = {
    "color": "blue",
    "category": 3,
    "price": 4.56
};


console.log(myBook.hasOwnProperty("color"));
console.log(myBook.hasOwnProperty("origin"));


function propertiesVerifying(obj, property) {
    if (obj.hasOwnProperty(property)) {
        return "Property: " + obj[property];
    } else {
        return "Object has not this property"
    }
};

console.log(propertiesVerifying(myBook, "origin"));

//Complex Objects

console.log("COMPLEX OBJECTS");

var pizzasOrder = [{
        'type': "margarita",
        'size': "individual",
        'price': 5.57,
        'toppings': [
            "extra cheese",
            "mushrooms",
            "pineapple"
        ],
        "toCarryOut": true
    },
    {
        "type": "four cheeses",
        "size": "family",
        "price": 19.3,
        "toppings": [
            "extra cheese",
            "peppers"
        ],
        "toCarryOut": false
    },
    {
        "type": "Neapolitan",
        "size": "individual",
        "price": 6.68,
        "toppings": [],
        "toCarryOut": false
    }
];

console.log(pizzasOrder[0]);
console.log(pizzasOrder[1]);
console.log(pizzasOrder[2]);

console.log(pizzasOrder[0].type);
console.log(pizzasOrder[1].type);
console.log(pizzasOrder[2].type);


console.log(pizzasOrder[0].toppings);
console.log(pizzasOrder[1].toppings);
console.log(pizzasOrder[2].toppings);

//Nested Objects

console.log("NESTED OBJECTS");

let myRecipe = {
    "description": "my favorite dessert",
    "cost": 15.18,
    "ingredients": {
        "dough": {
            "flour": "100 grs",
            "salt": "1 teaspoonful",
            "water": "1 cup"
        },
        "coating": {
            "sugar": "120 grs",
            "chocolate": "4 spoons",
            "butter": "200 grs"
        }
    }
};

console.log(myRecipe.description);
console.log(myRecipe.cost);


console.log(myRecipe.ingredients);

console.log(myRecipe.ingredients.dough);
console.log(myRecipe.ingredients.coating);

console.log(myRecipe.ingredients.dough.flour);
console.log(myRecipe.ingredients.coating.chocolate);