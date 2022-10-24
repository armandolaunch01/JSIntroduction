/**
 In golf every hole have a par that represent the 
 average hits number what  is expected made a golfer 
 to introduce the ball in the hole .

 There are a different name depending on how high or low of par its are 
 their hits

 Function take the arguments par and hits

 Return the correct string according to the following table that  shows 
 the order of hits on how to low priority

 Hits               Return
 --------------------------------
    1               "Hole in one"
<= par - 2          "Eagle"
   par - 1          "Birdie"
   par              "par"
   par + 2          "Bogey"
   par + 2          "Double Bogey"
>= par + 3          "Go Home!!!"

par and hits always will be numbers and positive
 */


function golfScore(par, hits) {
    if (hits == 1) {
        //console.log("Hole in one");
        return "Hole-in-one";
    } else if (hits <= par - 2) {
        //console.log("Eagle");
        return "Eagle";
    } else if (hits == par - 1) {
        //console.log("Birdie");
        return "Birdie";
    } else if (hits == par) {
        //console.log("Par");
        return "Par";
    } else if (hits == par + 1) {
        //console.log("Bogey");
        return "Bogey";
    } else if (hits == par + 2) {
        //console.log("Double Bogey");
        return "Double Bogey"
    } else if (hits >= par + 3) {
        //console.log("Go Home !!!");
        return "Go Home !!!";
    }
}

golfScore(4, 1);
golfScore(4, 2);
golfScore(4, 7);
/*golfScore(4, 4);
golfScore(4, 5);
golfScore(4, 6);
//golfScore(4, 7);
golfScore(4, 10);*/