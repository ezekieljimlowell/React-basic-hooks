import React from 'react';

export default function Parent () {
    const state = "Hello how are you?";

    return (
        <>
            <h2>Prop drilling</h2>
            <Child state={state}/>
        </>
    )
}

function Child ({state}) {
    return (
        <>
            <SubChildNested1 state={state}/>
        </>
    )
}

function SubChildNested1 ({state}) {
    return (
        <>
            <NestedChild2 state={state}/>
        </>
    )
}

function NestedChild2 ({state}) {
    return (
        <>
            <div>{state}</div>
        </>
    )
}