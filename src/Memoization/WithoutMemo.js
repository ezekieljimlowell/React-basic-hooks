import React from "react";
import { useState } from "react/cjs/react.development";

export default function WithoutMemo() {
    const [value, setValue] = useState(0);
    const [secondInput, setSecondInput] = useState(0)
    const [count, setCount] = useState(null);
    const resultOfAdd = add(Number(value), Number(secondInput));

    const changeHandler = (e) => {
        //console.log("I am onchange");
        setValue(e.target.value);
    }

    const secondInputHandler = (e) => {
        //console.log("I am second");
        setSecondInput(e.target.value);
    }

    const clickHandler = () => {
        //console.log("I am onclick");
        setCount(count + 1);
    }

    return (
        <>
            <h2>Without use memo</h2>
            <input type="number" onChange={changeHandler} value={value}></input>
            <input type="number" onChange={secondInputHandler} value={secondInput}></input>
            <button type="button" onClick={clickHandler}>Counting</button>
            <div>{resultOfAdd}</div>
            <div>{count}</div>
        </>
    )
}

function add(a,b) {
    //console.log("ohh");
    return a + b;
}