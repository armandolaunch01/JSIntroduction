contacts = [{
        "name": "Nora",
        "last_name": "Nav",
        "number": "46546546545",
        "pleasures": ["Pizza", "Programming"]
    },
    {
        "name": "Harry",
        "last_name": "Potter",
        "number": "7984351321+6",
        "pleasures": ["Hogwarts", "Magic"]
    },
    {
        "name": "Sherlock",
        "last_name": "Holmes",
        "number": "3215468466546",
        "pleasures": ["Interesting cases", "Violin"]
    }
];

// We should create a function to get a property to a contact

function profileSearch(name, property) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name === name) {
            return contacts[i][property] || "Property does not exist.";
        } //end if
    } //end for
    return "Contact does not exist on contact list."
} //end function 

console.log(profileSearch("Nora", "number"));
console.log(profileSearch("Harry", "pleasures"));
console.log(profileSearch("Nora", "address"));
console.log(profileSearch("Bob", "number"));