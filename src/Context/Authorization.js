import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ChildCounter } from "./ChildCounter";

export const Authorization = () => {
    const auth = useContext(AuthContext);
    console.log("Check Rendering");
    return (
        <>
            {auth.status ? <div>Login Successfully</div> : <div>Please Login</div>}
            {!auth.status && <button type="button" onClick={auth.login}>Login</button>}
            <Logout />
        </>
    )
}

const Logout = () => {
    const auth = useContext(AuthContext);
    console.log("Check Rendering");
    return (
        <>
            {auth.status && <button onClick={auth.logout}>Logout</button>}
            <ChildCounter />
        </>
    )
}