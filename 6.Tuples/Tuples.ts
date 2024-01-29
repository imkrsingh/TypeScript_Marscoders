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
function getUserInfo(): [string, number] {
  return ["Manish Singh", 25];
}

let userInfo: [string, number] = getUserInfo();
console.log(userInfo);

///////////// Fixed-Length Arrays  ////////
let coordinates: [number, number, number,string] = [10, 20, 30 , "Manish"];
console.log(coordinates);

///////////// Heterogeneous Data  ////////
let mixedData: [number, string, boolean] = [42, "Hello", true];
console.log(mixedData);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//

///////////////////////////////////////////  Another Tuples Types  ///////////////////////////////////////
///////////// Named Tuples  ////////
const graph: [x: number, y: number, z: number] = [55.2, 41.3, 96];
console.log(graph);

//////// Destructuring Tuples  ////
const values: [number, number] = [55.2, 41.3];
const [x, y] = values;
console.log(values)