import React from "react";

const ChildCounter = ({ count, children, onClick }) => {

    console.log(count, children);

    return (
        <>
            <button type="button" onClick={onClick}>{children}</button>
            <div>{count}</div>
        </>
    )
}

export default React.memo(ChildCounter);