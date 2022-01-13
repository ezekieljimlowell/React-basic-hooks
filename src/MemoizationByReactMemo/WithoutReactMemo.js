import React from "react";
import { useState } from "react/cjs/react.development";
import WithoutMemoChild from "./WithoutMemoChild";

export default function WithoutReactMemo() {
    const [value, setValue] = useState(null);

    const incrementHandler = () => {
        //console.log("increment Handler");
        setValue(value + 1);
    }

    const movie = "Tomorrow";
    const articles = "Day after Tomorrow";

    return (
        <>
            <h2>Without React.memo</h2>
            <button type="button" onClick={incrementHandler}>Increment</button>
            <div>{value}</div>
            <WithoutMemoChild movie={movie} articles={articles}/>
        </>
    )
}