////////// Prog.1 | Casting with as
var x = 'hello';
console.log(x.length);
////////// Prog.2 | Casting with as
var y = 'hello';
console.log(y);
///////// Prog.3
var z = 4;
console.log(z.length); // prints undefined since numbers don't have a length
//////////// Prog.4 | Casting with
// Using <> works the same as casting with as.This type of casting will not work with TSX, such as when working on React files.
var a = 'hello';
console.log(a.length);
//////////// Prog.5 | Force casting
var b = 'Manish';
//console.log(((b as unknown) as number).length); // x is not actually a number so this will return undefined
console.log(b.length);
