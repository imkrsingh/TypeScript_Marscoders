////////// Prog.1 | Casting with as
let x: unknown = 'hello';

console.log((x as string).length);

////////// Prog.2 | Casting with as
let y: unknown = 'hello';

console.log(y as number);

///////// Prog.3
let z: unknown = 4;
console.log((z as string).length); // prints undefined since numbers don't have a length

//////////// Prog.4 | Casting with
// Using <> works the same as casting with as.This type of casting will not work with TSX, such as when working on React files.
let a: unknown = 'hello';

console.log((<string>a).length);


//////////// Prog.5 | Force casting
let b = 'Manish';
//console.log(((b as unknown) as number).length); // x is not actually a number so this will return undefined
console.log(((b as unknown) as string).length);











