/////////////// Prog.1 | Typed Arrays
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// console.log(ourTuple);
//////////////Prog.2 | Typed Arrays
// define our tuple
// let ourTuple: [number, boolean, string];
// // initialize incorrectly throws an error
// // ourTuple = [false, 'Coding God was mistaken', 5];
// ourTuple = [25, true, 'Coding God was mistaken']; // Correct
// console.log(ourTuple);
/////////////Prog.3 | Tuple | Push String value
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
//////////////Prog.4 | Readonly Tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple)
// // instead use our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// console.log(ourReadonlyTuple);
// // throws error as it is readonly.
// // ourReadonlyTuple.push('Coding God took a day off');
///////////////////////////////////////////////  Tuples Types  ///////////////////////////////////////////
///////////// Multiple Values Return  ////////
function getUserInfo() {
    return ["Manish Singh", 25];
}
var userInfo = getUserInfo();
console.log(userInfo);
///////////// Fixed-Length Arrays  ////////
var coordinates = [10, 20, 30, "Manish"];
console.log(coordinates);
///////////// Heterogeneous Data  ////////
var mixedData = [42, "Hello", true];
console.log(mixedData);
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
///////////////////////////////////////////  Another Tuples Types  ///////////////////////////////////////
///////////// Named Tuples  ////////
var graph = [55.2, 41.3, 96];
console.log(graph);
//////// Destructuring Tuples  ////
var values = [55.2, 41.3];
var x = values[0], y = values[1];
console.log(values);
