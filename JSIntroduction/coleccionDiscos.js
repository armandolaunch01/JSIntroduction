var recordsCollection = {
    7853: {
        albumTitle: "Bee Gees Greatest Hits",
        artist: "Bee Gees",
        songs: ["Staying alive"]
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

function recordsUpdate(records, id, property, value) {
    if (value === "") {
        delete records[id][property];
    } else if (property === "songs") {
        records[id][property] = records[id][property] || [];
        records[id][property].push(value);
    } else {
        records[id][property] = value;
    }
};

//TESTING THE FIRST CONDITION
console.log("TESTING THE FIRST CONDITION");
console.log(recordsCollection[7853].albumTitle);
recordsUpdate(recordsCollection, 7853, "albumTitle", "");
//console.log(recordsCollection[5493].albumTitle);
console.log(recordsCollection[7853].albumTitle);

//TESTING THE SECOND CONDITION
console.log("TESTING THE SECOND CONDITION");
console.log(recordsCollection[5439].songs);
recordsUpdate(recordsCollection, 5439, "songs", "Mamma mia");
//console.log(recordsCollection[5493].albumTitle);
console.log(recordsCollection[5439].songs);

console.log(recordsCollection[5439].artist);
recordsUpdate(recordsCollection, 5439, "artist", "ABBA");
//console.log(recordsCollection[5493].albumTitle);
console.log(recordsCollection[5439].artist);