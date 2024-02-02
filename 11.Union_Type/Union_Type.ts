// Code.1 - Union | (OR)
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  
  printStatusCode(404);
  printStatusCode(typeof 404);
  printStatusCode('404');
  printStatusCode(typeof '404');

// Code.2 -   Union Type Errors  || Code Error
//   function printStatusCode(code: string | number) {
//      console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
//   }

