import React, { useState } from 'react';

const Counter = () => {
  const [count,setCount]=useState(0)

    const handleIncrement =()=>{
      setCount(count+1);
    }
    return (
        <div>
            {count}
           <button onClick={handleIncrement}>increment</button> 
        </div>
    );
};

export default Counter;
 

