import React from "react";

const MemoChild = ({ movie }) => {

    console.log("MemoChild")

    return (
        <>
            <div>{movie}</div>
        </>
    )
}

export const MemoizedChild = React.memo(MemoChild);