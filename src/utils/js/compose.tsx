export function compose<U>(...fns: Function[]){
    return <E,>(initialValue: any) =>
    fns.reduceRight((previousValue, fn): U => fn(previousValue), initialValue)
}

export function pipe<U>(...fns : Function[]){
    return<E,>(initialValue: any): U =>
        fns.reduce((previosValue, fn) => fn(previosValue), initialValue)
}

export function pick<K extends string>(prop: K){
    return <O extends Record<K, any>>(obj: O) => obj[prop]
}

export function isEqual<T>(left: T){
    return <E extends T>(right: E) => left === right;
}

export function cond(b: boolean){
    return !b;
}

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);

const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
);

//Ramda.js