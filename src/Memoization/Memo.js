import React, { useMemo } from "react";
import { useState } from "react/cjs/react.development";

export default function Memo() {
    const [input, setInput] = useState(0);
    const [count, setCount] = useState(null);
    const resultOfSquare = useMemo(() => square(input), [input]);

    const inputHandler = (e) => {
        console.log("check input")
        setInput(e.target.value);
    }

    const counterHandler = () => {
        console.log("counter handler")
        setCount(count + 1);
    }

    return (
        <>
            <h2>Use Memo</h2>
            <input type="number" onChange={inputHandler} value={input}></input>
            <button type="button" onClick={counterHandler}>Counter</button>
            <div>{resultOfSquare}</div>
            <div>{count}</div>
        </>
    )
}

function square(a) {
    console.log("Square");
    return Math.pow(a, 2);
}