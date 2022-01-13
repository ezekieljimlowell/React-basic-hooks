import React, { useLayoutEffect, useState } from "react";

export default function LayoutEffect() {
    const [text, setText] = useState("I am Lowell");

    useLayoutEffect(() => {
        setText("Ezekiel");
        /*setTimeout(() => {
            setText("I am Ezekiel");
        }, 500);*/
    }, [])

    return (
        <>
            <h2>Layout effect</h2>
            <div>{text}</div>
        </>
    )
}