import React from "react";
import { useEffect, useRef, useState } from "react/cjs/react.development";

export default function ArrayRef() {
    const [arrayOfReference, setArrayOfReference] = useState([]);

    const reference = useRef([]);

    useEffect(() => {
        reference.current = reference.current.slice(0, arrayOfReference.length)
    }, [arrayOfReference.length])

    const arrayMaker = () => {
        var input = [...arrayOfReference]
        input.push({ id: Math.random() })

        setArrayOfReference(input);
        console.log(arrayOfReference)
    }

    return (
        <>
            <h1>Array of Reference</h1>
            <button type="button" onClick={arrayMaker}>Add Input</button>
            {arrayOfReference.length > 0 && arrayOfReference.map((element, index) =>
                <div key={element.id}>
                    <span>Input {index}</span> : <input type="text" ref={el => reference.current[index] = el}></input>
                    <button type="button" onClick={() => reference.current[index].focus() }>Edit</button>
                </div>
            )}
            <h3>All basic hooks are completed</h3>
        </>
    )
}