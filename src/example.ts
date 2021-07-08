// Типы в JS

const str = 'string';
const strType = typeof(str); // string

const num = 2;
const numType = typeof(num); // number

const nan = NaN;
const nanType = typeof(nan); // number

const obj = {};
const objType = typeof(obj); // object

const arr = [1,2,3];
const arrType = typeof(arr); // object

const nul = null;
const nulType = typeof(nul); // object

const sym = Symbol();
const symType = typeof(sym); // symbol

const und = undefined;
const undType = typeof(und); // undefined

const _void = void 0;
const _voidType = typeof(_void); // undefined

const bool = true;
const boolType = typeof(bool); // boolen

const fn = () => {};
const fnType = typeof(fn); // function


// Simple JS Types

type SimpleJSTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Strange TS Types

type StrangeTSTypes = any | unknown | never

const a:StrangeTSTypes = 5;

// Указание типа массива

const tsArray: number[] = [1,2,3];

const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, "3"];
const unionArray2: Array<string | number> = [1, 2, "3"];

// Tuple

const myTuple : [number, string] = [1, "2"];

// Указание типа объекта

const myObj: {a: number, b: string} = {a: 1, b: "2"};

// Тип объекта через интерфейс

interface IMyObj {
    readonly a: number,
    b?: string,
    c: number[]
}

// Типизация большого числа ключей

const ApiAnswer: IndexInterface = {key: 'a', key1: 'b'};

interface IndexInterface {
    [n: string] : string
}

// Enum

enum Methods {
    add,
    sub = 'sub'
}

// Типизация функций

function calculate(method: Methods, left: number, right: number):number{
    switch(method){
        case Methods.add : return left + right;
        case Methods.sub : return left - right;
    }
}

const sum = calculate(Methods.add, 2, 3);

// Задание типа стрелочной функции

type TypeFn = () => number;

const ArrowFn: TypeFn = () => 2;

interface FnInterface {
    (a: number) : void;
}

const ArrowFn2 : FnInterface = (a) => console.log(a);

// Generics

const myArray3: MyArray2<number> = [];

interface MyArray2<T> {
    [N: number]: T

    map<U>(fn:(el: T) => U ) : U[]
}

myArray3.map((f)=> f + 1);

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}

interface IWithType<T> {
    type: string,
    value: T
}

function withType<U>(arg: U): IWithType<U>{
    return {
        type: typeof arg,
        value: arg
    }
}

const result = withType(123);

// Втроенные Generics

interface IExample<T> {
    type: string,
    value: T,
    isEmpty: boolean
}

const omittedObject: Omit<IExample<string>, 'isEmpty'> = {
    type: "123",
    value: "str"
}

const picked: Pick<IExample<string>, 'isEmpty'> = {
    isEmpty: true
}

const partial: Partial<IExample<object>> = {}

// Классы

class Constructor {
    public field: number = 123;

    constructor(arg: number){
        this.field = arg;
    }

    public publicMethod(): number{
        return this.field;
    }

    protected protectedMethod(): number{
        return this.field + 10;
    }

    private privateMethod(): number{
        return this.field + 30;
    }
}

const instance = new Constructor(123);
instance.publicMethod;

// mappedTypes

const mistake = [] as Array<number>; //Type Casting или приведение к типу
mistake.push(1);

const bigObject = {
    width: 300,
    height: 200,
    title: "Menu",
    litteleObject : {
        width2: 300,
        height2: 200,
        title2: "Menu"
    }
}

type TMyBigObject = typeof bigObject;

// ПРисвоение свойства readonly всем полям объекта
// const typedBigObject: Readonly<TMyBigObject> = bigObject;

//typedBigObject.width = 200;
// typedBigObject.litteleObject.width2 = 100;

// type MyReadonly = {
//     readonly [N in "asd" | "qwe"]: N
// }

// const some: MyReadOnly3<TMyBigObject> = {
//     width: 100
// }

// type MyReadonly2 = {
//     readonly [N in keyof TMyBigObject]: TMyBigObject[N]
// }

//MappedTypes
// type MyReadOnly3<T> = {
//     readonly [N in keyof T]?: T[N];
// }

// type TLitteType = TMyBigObject['title'];

// type MyPartial<T> = {
//     [N in keyof T}]: T[N];
// }

// type MyPick<T, K extends keyof T> = {
//     [N in K] : T[N]
// }

type MyReadonlyDeep<T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

type TSomeTypes = MyReadonlyDeep<TMyBigObject>;


// Type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeTypes>;

function createrThenZero(a: number): boolean {
    return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[])=> infer R) ? R : never;
type FnParametersType<T> = T extends ((...args: infer R) => any) ? R : never;

type TRetuenType = FnReturnType<typeof createrThenZero>;
type TArgsType = FnParametersType<typeof createrThenZero>;