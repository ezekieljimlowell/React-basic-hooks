import React, { useEffect, useState } from "react";

export default function StateAndEffect() {
    const [count, setCount] = useState(null);
    const [users, setUsers] = useState([]);

    const incrementCount = () => setCount(count + 1);

    const decrementCount = () => setCount(count - 1);

    const resetCount = () => setCount(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
            .then(data => setUsers(data))
    })

    return (
        <>
            <h2>Use state and useEffect</h2>
            <div>{count}</div>
            <button type="button" onClick={incrementCount}>Increment</button>
            <button type="button" onClick={decrementCount}>Decrement</button>
            <button type="button" onClick={resetCount}>Reset</button>
            {users.length > 0 && users.map(user => <div key={user.id}>{user.username}</div>)}
        </>
    )
}


