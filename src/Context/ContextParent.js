import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { Authorization } from "./Authorization";
import { TryWithCosumer, TryWithUseContext } from "./SomeComponent";

export const ContextParent = () => {
    const [authStatus, setAuthStatus] = useState(false);
    const [count, setCount] = useState(null);
    console.log("Check Rendering");
    const login = () => {
        setAuthStatus(true);
    }

    const logout = () => {
        setAuthStatus(false);
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Use Context</h2>
            <AuthContext.Provider
                value={{
                    status: authStatus, login: login, logout: logout, count: count, incrementCount: incrementCount
                }}>
                <Authorization />
            </AuthContext.Provider>
            <TryWithCosumer />
            <TryWithUseContext />
        </>
    )
}