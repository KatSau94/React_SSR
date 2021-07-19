import { react } from "@babel/types";
import React from "react";
import ReactDOM from "react-dom";
import type {ComponentType} from 'react';

// Задание 1. Напишите тип функции, конкатенирующей две строки

const concat = (str1:string, str2:string):string => str1 + str2;

console.log(concat("Hello ", "World"));

// Задание 2. Напишите интерфейс для описания следующих данных

interface IMyHometask {
    howIDoIt:string,
    simeArray:(string | number)[],
    withData:{
        howIDoIt: string,
        simeArray:(string | number)[]
    }[];
}

const MyHometask : IMyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Задание 3. В уроке про Generics мы написали интерфейс массива MyArray, добавьте типизацию для метода reduce

interface MyArray<T> {
    [N: number]: T,

    reduce(fn: (a: T, b: T) => T, initialValue:T):T
}

const myArray: MyArray<number> = [1,2,3];

myArray.reduce((a, b) => a + b, 5);

const myArray2: MyArray<string> = ['Hello', "World"];

myArray2.reduce((a, b) => a + b, "String");

// Задание 4. Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

// Задание 5. Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.

function HomeComponent (props:IProps) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}

interface IProps {

    firstProp: string

}

type TMyType<T> = T extends React.ComponentType<infer P> ? P : never;

type t = TMyType<typeof HomeComponent>;


function Test(): JSX.Element {
    return <div />;
  }

const a = typeof Test;

// Задание 6

type TDivElement = JSX.IntrinsicElements['div'];

type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never;
type TDivProps = TGetJSXPropsProp<'div'>

const props: TDivProps = {

    //some: '1233', // throw error потому что не содержится в атрибутах div

    className: 'handler' // не выкидывает ошибку так как валидно для div элемента

}
