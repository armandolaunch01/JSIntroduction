/* 
Queue is a data structure, in this the elements have a order, the new elements are put in the final of queue and the previous elements are withdraw of begin of the queue

nextInQueue: take an (Array) and a number (element) like arguments, we should add the number at final of array and then delete the first element 
of the array, the function nextInQueue must return the removed element
*/

function nextInQueue(arr, elem) {
    arr.push(elem); //add at final array
    return arr.shift(); //Remove first element

}
var myArray = [1, 2, 3, 4, 5];
//BEFORE
console.log("Antes: " + JSON.stringify(myArray));
console.log(JSON.stringify(myArray));

console.log(nextInQueue(myArray, 63543541));
//LATER
console.log("Later: " + JSON.stringify(myArray));