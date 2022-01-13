import React, { useRef } from "react";

export const useReference = () => {
    const reference = useRef(null);

    const clickHandler = () => {
        reference.current.focus();
    }

    return (
        <>
            <h2>Use ref</h2>
            <input type="text" ref={reference}></input>
            <button type="button" onClick={clickHandler}>Refer Input</button>
        </>
    )
}