/*
We have an object, it represents a part of an music album collection

Every album has a unique identification number  (id)  associated 
to other properties 

Not every albums have complete information

*/

var recordCollection = {
    7835: {
        albumTitle: "Bee Gees  Greatest",
        artist: "Bee Gees",
        songs: ["Staying' Alive"]
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

/**
Define a function updateRecords() with the following parameters
*record (the object that represent record collection)
*id.
*property ("Artist" or "song")
* value

THe goal is complete the function implementing the following rules
in order to update the object passed to the function 

- if "value" is a empty string, delete the property of correspondent album
- if "property" is equal to the string "songs" but album has not the property "songs", create an empty array
  of songs and add "value" to this array
- if "property" is equal to the string "songs" and "value" is not a empty string, add "value" at final of song array of the correspondent album
- if "value" is not an empty string  and "property" is not equal to "songs", assign the parameter value "value" to the property
If the property doesn't exist, you must create it and assign this value

 */

function updateRecords(records, id, property, value) {
    //Using the strict equal operator
    if (value === "") {
        delete records[id][property];
    } else if (property === "songs") {
        records[id][property] = records[id][property] || [];
        records[id][property].push(value);
    } else {
        records[id][property] = value;
    }
};

/*console.log(recordCollection[7835].albumTitle);
console.log(recordCollection[7835].artist);
console.log(recordCollection[7835].songs);
*/

//FIRST CONDITION TESTING
console.log("FIRST CONDITION TESTING")
console.log(recordCollection[7835].albumTitle);
updateRecords(recordCollection, 7835, "albumTitle", "");
console.log(recordCollection[7835].albumTitle);

//SECOND CONDITION TESTING
console.log("SECOND CONDITION TESTING");
console.log(recordCollection[5439].songs);
updateRecords(recordCollection, 5439, "songs", "Mamma Mia");
console.log(recordCollection[5439].songs);
//Updating artist property 
console.log(recordCollection[5439].artist);
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection[5439].artist);