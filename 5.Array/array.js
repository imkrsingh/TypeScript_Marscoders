// Prog.1
// const names: string[] = [];
// names.push("Manish"); // no error
// //names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// names.push("3");
// console.log(names);
// Prog.2
// const names: readonly string[] = ["Manish"];
// //names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?
// console.log(names);
// Prog.3
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
numbers.push(2);
console.log(numbers);
var head = numbers[0]; // no error
console.log(head);
