///////////Prog.1 | TypeScript Object Types
// const Manish: { Tech: string, Education: string, year: number } = {
//     Tech: "React.js Developer",
//     Education: "B.Tech",
//     year: 2024
//   };
//   console.log(Manish);
///////////Prog.2 | Type Inference
// const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford"; // no error
//   //car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
//   console.log(car);
///////////Prog.2.1 | Type Inference | Error Free code
// const car: {type: string} = {
//     type: "Toyota",
//   };
//   car.type = "Ford"; // no error
//   car.type = "BMW";
//   console.log(car);
///////////Prog.3 | Optional Properties | Error
/////////  Optional properties are properties that don't have to be defined in the object definition. ////////
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 2000;
///////////Prog.3.1 | Optional Properties | Error Free
// const car: { type: string, mileage?: number } = {
//     type: "Toyota"
//   };
//   car.mileage = 2000;
//   console.log(car);
//The code defines a constant variable car as an object with a required property type of string type and an optional property mileage of number type. The mileage property is later assigned a value of 2000, and the entire object is printed to the console.
///////////Prog.3.2 | Without Optional Properties
// const car: { type: string, mileage: number } = {
//     type: "Toyota",
//     mileage: 2000
// };
// console.log(car);
///////////Prog.4 | Index Signatures
////////////  Index signatures can be used for objects without a defined list of properties. 
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
// Object_Types.js
