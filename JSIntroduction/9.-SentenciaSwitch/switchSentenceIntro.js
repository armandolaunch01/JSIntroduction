function valueClassification(value) {
    var answer;
    switch (value) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

valueClassification(1);
valueClassification(2);
valueClassification(3);
valueClassification(4);

console.log(valueClassification(1));
console.log(valueClassification(2));
console.log(valueClassification(3));
console.log(valueClassification(4));

//Switch whit strings
console.log("Example with strings");

var product = "hamburger";

switch (product) {
    case "pizza":
        console.log("The basic pizza costs $ 2.00");
        break;
    case "hamburger":
        console.log("Hamburgers costs $ 5.00");
        break;
    case "Ice-Cream":
        console.log("Ice-Cream costs is $ 4.00");
        break;
}

console.log("After switch");

console.log("Switch sentence: Default option");

function languageSelection(value) {
    var language;
    switch (value) {
        case 1:
            language = "Spanish";
            break;
        case 2:
            language = "French";
            break;
        case 3:
            language = "Italian";
            break;
        default:
            language = "English";
    }
    return language;
}

console.log(languageSelection(1));
console.log(languageSelection(2));
console.log(languageSelection(3));
console.log(languageSelection(4));

//SWITCH SENTENCE : Multiple Cases
console.log("Switch sentence: Multiple cases");

function volumeClassification(value) {
    var volume;
    switch (value) {
        case 1:
            volume = "Low";
            break;
        case 2:
        case 3:
            volume = "Intermediate";
            break;
        case 4:
        case 5:
        case 6:
            volume = "High";
            break;
        default:
            volume = "Warning !!!";

    }
    return volume;
}


console.log(volumeClassification(1));
console.log(volumeClassification(2));
console.log(volumeClassification(3));
console.log(volumeClassification(4));
console.log(volumeClassification(5));
console.log(volumeClassification(6));
console.log(volumeClassification(7));
console.log(volumeClassification(8));


//"'if...else' by 'switch' example"
console.log("'if...else' by 'switch' example")

function selectLanguage(value) {
    var language;

    switch (value) {
        case 1:
            language = "Spanish";
            break;
        case 2:
            language = "French";
            break;
        case 3:
            language = "Italian";
            break;
        default:
            language = "English";
            break;

    }

    /*if (value == 1){
        language ="spanish";
    }else if (value == 2){
        language = "French";
    }else if (value == 3){
        language = "Italian";
    }else{
        language = "English"
    }*/
    return language;
}

console.log(selectLanguage(1));
console.log(selectLanguage(2));
console.log(selectLanguage(3));
console.log(selectLanguage(4));

//BOOLEAN VALUES RETURN

console.log("Boolean Values Return");

function isLowThan(a, b) {

    return a < b;

    /*if (a < b){
        return true;
    }else{
        return false;
    }*/
}

console.log(isLowThan(3, 6));
console.log(isLowThan(6, 3));
console.log(isLowThan(3, 3));

//EARLY RETURN PATTERN

console.log("EARLY RETURN PATTERN");

function myFunction() {
    console.log("Hello!!!");
    return "World!!!";
    console.log("Bye!!!");
}

console.log(myFunction());

//Example
console.log("sqrt calculation Example");

function squareRootCalculation(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(squareRootCalculation(25));
console.log(squareRootCalculation(-25));
console.log(squareRootCalculation(25));