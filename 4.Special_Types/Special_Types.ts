// Example without any | Prog.1

// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.

// u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.

// document.write(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.


// Example with any | Prog.2
// let v: any = true;
// v = "string";
// document.write(Math.round(v));


// Type: never | Prog.3
// Type 'true' is not assignable to type 'never'.
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.


let y: undefined = undefined;
document.write(typeof y + "<br>");

let z: null = null;
document.write(typeof z + "<br>");


// Type: unknown | Program.4
let w: unknown = 1; 
w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    document.write("I think therefore I am" + "<br>");
  } 
} as { runANonExistentMethod: () => void }

// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 

