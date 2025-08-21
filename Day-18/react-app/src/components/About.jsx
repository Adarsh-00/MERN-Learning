import React, { useState } from 'react';

const About = () => {
    const [count, setCount] = useState(0); //trigger rerender, updated value will show.
    // let count = 0; //not trigger rerender, the updated value will not show.

    function incr() {
        setCount(count+1);
        // count++;
        // console.log(count);
    }
    function decr() {
        setCount(count-1);
    }
    function reset() {
        setCount(0);
    }
  return (
    <div>
      <h1>this is count : {count}</h1>
      <button onClick={incr}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decr} disabled={count==0?true:false}>-</button>
    </div>
  );
}

export default About;
