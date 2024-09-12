import React, { useState } from 'react'

const Counter = () => {

    // let x=10;
    const [x,setx] = useState(10);
    console.log(x)

    const handelIncrement = ()=>{
        setx(x+1)
    
    }
    const handelDecrement = ()=>{
        setx(x-1)
    }
  return (
    <div class='counter'>
      counter here...
      <p>value:{x}</p>

      <button class='button' onClick={handelIncrement}> incriment</button>
      <button class='button' onClick={handelDecrement}> decriment</button>
    </div>
  )
}

export default Counter
