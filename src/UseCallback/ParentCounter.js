import React, { useState, useCallback } from "react";
import ChildCounter from "./ChildCounter";

export const ParentCounter = () => {
    const [count1, setCount1] = useState(null);
    const [count2, setCount2] = useState(null);

    const firstCountHandler = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1])

    const secondCountHandler = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2])

    return (
        <>
            <h2>Without useCallback</h2>
            <ChildCounter count={count1} onClick={firstCountHandler}>Counter 1</ChildCounter>
            <ChildCounter count={count2} onClick={secondCountHandler}>Counter 2</ChildCounter>
        </>
    )
}