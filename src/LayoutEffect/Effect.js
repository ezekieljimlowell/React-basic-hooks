import React, { useEffect, useState } from "react";

export default function Effect() {
    const [effect, setEffect] = useState("I am Hentry");

    useEffect(() => {
        setEffect("Martin");
        /*setTimeout(() => {
            setEffect("I am martin")
        }, 3000);*/
    }, [])

    return (
        <>
            <h2>With Effect</h2>
            <div>{effect}</div>
        </>
    )
}