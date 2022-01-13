import React from "react";

export default function WithoutMemoChild({ movie, articles }) {
    //console.log("check child");
    return (
        <>
            <div>{movie}</div>
            <div>{articles}</div>
        </>
    )
}