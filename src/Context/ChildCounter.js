import React from "react";
import { AuthContext } from "./AuthContext";

export const ChildCounter = () => {
    console.log("Check Rendering");
    return (
        <AuthContext.Consumer>
            {value => <>
                <div>{value.count}</div>
            <button type="button" onClick={value.incrementCount}>Increase</button>
            </>}
        </AuthContext.Consumer>
    )
}