///////////////// Code.1 | Functions //////////////////
// function createPair<S, T, U>(v1: S, v2: T, v3:U): [S, T, U] {
//     return [v1, v2, v3];
//   }

//   console.log(createPair<string, number, boolean>('hello', 42, true));

///////////////// Code.2 | Classes //////////////////
// class NamedValue<T> {
//     private _value: T | undefined;

//     constructor(private name: string) { }

//     public setValue(value: T) {
//         this._value = value;
//     }

//     public getValue(): T | undefined {
//         return this._value;
//     }

//     public toString(): string {
//         return `${this.name}: ${this._value}`;
//     }
// }

// const value = new NamedValue<number>('myNumber');

// value.setValue(10);

// console.log(value.toString());

///////////////// Code.3 | Type Aliases //////////////////
// type Wrapped<T> = { value: T };

// const wrappedValue: Wrapped<number> = { value: 12 };
// console.log(wrappedValue);

///////////////// Code.4 | Default Value //////////////////
class NamedValue<T = string> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue("myNumber");
value.setValue("myValue");
console.log(value.toString());

