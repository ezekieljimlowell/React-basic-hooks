import React, { useEffect, useLayoutEffect } from "react";

export default function Difference() {
    useEffect(() => console.log("effect"));
    useLayoutEffect(() => console.log("Layout"));

    useEffect(() => setTimeout(() => {
        console.log("effect with one second delay");
    }, 1000))

    useLayoutEffect(() => {
        setTimeout(() => {
            console.log("useLayout with 1.5")
        }, 1500);
    })

    return (
        <>
            
        </>
    )
}