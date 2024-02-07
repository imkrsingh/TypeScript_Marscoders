// Code.1
// let data:any;
// //let data:unknown;

// data = 20;
// data = "hello"

// let item: string;
// item = data
// console.log(item)

// Code.2
//let data:any;
let data: unknown;

data = 20;
data = "hello";

let items: string;

if (typeof data === 'string') {
    items = data;
    console.warn(items);
}

