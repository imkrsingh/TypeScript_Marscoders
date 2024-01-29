// Explicit Type | Prog. 1
let firstName: string = "Dylan"; // type string

document.write(typeof firstName +"<br>");


// Error In Type Assignment | Prog. 2
// let firstName: string = "Dylan"; // type string

// firstName = 33; // attempts to re-assign the value to a different type

// document.write(firstName);


// Unable to Infer | Prog. 3
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");

// Most expect json to be an object, but it can be a string or a number like this example
document.write(typeof json +"<br>");

