import React from "react";
import { useState } from "react/cjs/react.development";
import { MemoizedChild } from "./MemoChild";

const ReactMemo = () => {
    let [number, setNumber] = useState(0);
    const [click, setClick] = useState(false);

    const numberHandler = () => {
        console.log("numberHandler");
        setNumber(number + 1);
    }

    const clickHandler = () => {
        console.log("click Boolean");
        setNumber(++number);
        console.log(number)
        if(number % 2 !== 0) {
            setClick(true);
        }
        else {
            setClick(false)
        }
    }

    let movie = click ? "Spider man No Way Home" : "Resident Evil 4";

    return (
        <>
            <h2>React.memo</h2>
            <button type="button" onClick={numberHandler}>Increase</button>
            <button type="button" onClick={clickHandler}>Change</button>
            <div>{number}</div>
            <MemoizedChild movie={movie}/>
        </>
    )
}

export default ReactMemo;