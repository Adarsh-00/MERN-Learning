import React, { useEffect, useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('State updated, cause rerender');
    },[count]);
    return (
        <div>
            <h1>
                Counter : - <span>{count}</span> {}
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            </h1>
        </div>
    );
}

export default State;
