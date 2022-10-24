/*
Description

In the casino game blackjack player can take out advantage 
to the home carrying a relative number registry of low and 
cards that are left in the deck.

It is named "Cards counting"

Having more high card in the deck is an advantage for player.
A value is assigned to each card according to the following
table

-When the counting is positive, player should bet high
-When the counting is low, player should bet low

    Change counting     Cards
-----------------------------------
        +1              2, 3, 4, 5, 6
         0              7, 8 , 9
        -1              10, 'J', 'Q', 'K', 'A'

Our goal is define a counting cards function

Function take a card parameter that can be a number or string 
and later increase or reduce the global variable value counting
according to the card value (look the table);

Function must return a string with current counting 
and string
    "Bet" if counting is positive
    "Wait" if counting is Zero or negative

Current counting and player decision 
("bet o wait") should be separated for a space 

*/

var counting = 0;

function cardsCounting(card) {
    var decision;

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            counting++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            counting--;
            break;
    }
    if (counting > 0) {
        decision = "Bet!!!";
    } else {
        decision = "Wait!!!";
    }
    return counting + " " + decision;
}

console.log(cardsCounting(2));
console.log(cardsCounting(3));
console.log(cardsCounting(8));
console.log(cardsCounting(7));
console.log(cardsCounting("A"));
console.log(cardsCounting("J"));
console.log(cardsCounting("Q"));