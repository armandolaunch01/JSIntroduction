var count = 0;

function cardsCounting(card) {
    var decision;

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        decision = "Bet";
    } else {
        decision = "Await";
    }

    return count + " " + decision;
}

console.log(cardsCounting(2));
console.log(cardsCounting(3));
console.log(cardsCounting(7));
console.log(cardsCounting("K"));
console.log(cardsCounting("A"));
console.log(cardsCounting(9));