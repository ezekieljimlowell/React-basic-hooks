import React from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "./AuthContext";

export const TryWithCosumer = () => {
    console.log("Check Rendering");
    return (
        <AuthContext.Consumer>
            {value => <div>{value.count}</div>}
        </AuthContext.Consumer>
    )
}

export const TryWithUseContext = () => {
    const countContext = useContext(AuthContext)
    console.log("Check Rendering");
    return (
        <>
            <div>{countContext.count}</div>
        </>
    )
}