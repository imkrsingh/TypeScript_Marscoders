// type DynamicObject = { [key: string as `dynamic_${string}`]: string };

// // Usage: 
// let obj: DynamicObject = { dynamic_key: "value" };

// console.log(obj);

//////// Code.2 /////
type DynamicObject = {
    [Key in `dynamic_${string}`]: string;
};

// Usage:
let obj: DynamicObject = { dynamic_key: "value" };

console.log(obj);
