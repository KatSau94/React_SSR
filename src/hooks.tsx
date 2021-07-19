import React from 'react';

// useState

// useEffect

export function MyHooks({title, id}: {title: string, id: string}){
    // React.useEffect(() => {
    //     console.log('componentDidMount');
    //     console.log('componentWillUpdate');
    // });

    // React.useEffect(() => {
    //     console.log('componentDidMount');
    //     return () => {
    //         console.log('componentWillUnmount')
    //     }
    // }, []);

    // React.useEffect(() => {
    //     console.log('coponentWillReceiveProps: ', title)
    // }, [title]);

    const [isMounted] = useIsMounted();

    React.useEffect(()=>{
        console.log('isMounted ', isMounted);
    }, [isMounted])

    const items = 10;
    const multiplier = 5;

    React.useMemo(
        () => calculate(items, multiplier),
        [items, multiplier]
    )

    return (
        <div>{title}{id}</div>
    )
}

function useIsMounted(){
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(()=>{
        setIsMounted(true)
    }, [])

    return [isMounted];
}


// useMemo

function calculate(items: number, multiplier: number){
    return new Array(items).fill(1).reduce((a,v)=> a * multiplier)
}