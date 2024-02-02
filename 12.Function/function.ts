////// Code.1 | Return Type ////////
//////// returns a number ////////
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());
// Note -- return new Date().getTime();: Inside the function, it creates a new Date object, retrieves the current timestamp using getTime(), and returns that timestamp.
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//


////// Code.2 | Void Return Type ////////
function printHello(): void {
    console.log('Hello! Manish');
  }
  
  printHello();


///////// Code.3 | Parameters //////////
function multiply(a: number, b: number) {
    return a * b;
  }
  
  console.log(multiply(2,5))


/////// Code.4 | Optional Parameters //////
function add(a: number, b: number, c?: number) {
    return a + b + (c || 10);
  }
  
  console.log(add(2,5))


/////// Code.5 | Default Parameters ///////
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  
  console.log(pow(10));


/////// Code.6 | Named Parameters ///////
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  
  console.log(divide({dividend: 10, divisor: 2}));


//////// Code.7 | Rest Parameters ////////
function adds(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
  
  console.log(adds(10,10,100,10,121));


////////// Code.8 | Type Alias //////////
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));
