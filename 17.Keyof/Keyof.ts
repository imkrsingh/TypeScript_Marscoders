//////// Code.1 /////////

// interface Person {
//     name: string;
//     age: number;
//   }
  
//   // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
//   function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
//   }
  
//   let person = {
//     name: "Manish Singh",
//     age: 25
//   };
  
//   printPersonProperty(person, "name"); // Printing person property name: "Manish Singh"



//////// Code.2 //////
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}


const result = createStringPair('exampleKey', 'exampleValue');
console.log(result);