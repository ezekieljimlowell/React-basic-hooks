import React, { useImperativeHandle } from "react";
import { useRef, forwardRef } from "react/cjs/react.development";

const Input = (props, ref) => {
    const reference = useRef(null);

    console.log(props, ref)

    useImperativeHandle(ref, () => ({ focus: () => console.log("I am focus") }));

    return (
        <>
            <input type="text" ref={reference} {...props}></input>
        </>
    )
}

export default forwardRef(Input);