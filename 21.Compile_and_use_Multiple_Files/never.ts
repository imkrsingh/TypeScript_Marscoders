////// Code.1

// function tryReturn() {
//     return true;
// }
// console.log(tryReturn());

////// Code.2
// function tryReturn() {
//     //return true;
// }
// console.log(tryReturn());


////// Code.3
// //function apiError(msg, code)
// function apiError(msg, code): never 
// {
//     throw { message: msg, apiCode: code }
// }
// console.log(apiError("server side error", 500))

////// Code.4
// Void type example
// function greet(): void {
//     console.log("Hello!");
// }

// greet(); // Output: Hello!

// Never type example
function throwError(message: string): never {
    throw new Error(message);
}

throwError("Something went wrong!"); // This line will throw an error and never complete normally



