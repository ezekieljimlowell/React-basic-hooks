import React from "react";
import { useRef } from "react/cjs/react.development";
import Input from "./Input";

export default function ParentImperative() {
    const ref = useRef();

    return (
        <>
            <h2>Imperative handle</h2>
            <Input ref={ref} onFocus={() => ref.current.focus()}/>
        </>
    )
}