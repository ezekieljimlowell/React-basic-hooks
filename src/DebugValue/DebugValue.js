import { useState, useDebugValue } from "react";

export default function useCustom() {
    const [a, setA] = useState(false);

    useDebugValue("I am a car");

    return [a,setA]
}

export const useAnother = () => {
    const [b] = useState(100);

    useDebugValue(b ? "I am active" : "I am inactive");

    return [b];
}