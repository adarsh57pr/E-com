import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const ConditionalRendring = () => {

    // let x = false;
    const [x,setx] = useState(false)

         const handelClick= ()=>{
            // console.log("running")
            setx(!x)
         }

  return (
    <div className='' style={{textAlign:"center"}}>

        {/* {x ? <h1>Thish is text one</h1>:<h1>Thish is text two</h1>} */}
{/* OR...... */}

     {x && <h1>Thish is text one</h1>}
      {!x && <h1>Thish is text two</h1>}
      <button onClick={handelClick}>Click me</button>


      {x && <form action='' className='' style={{ height:"300px", width:"400px", marginTop:"100px", margin:"auto", backgroundColor:"lightgray"}}>

        <lebel >Name</lebel>
        <input type="text" /> <br />
        <lebel >Name</lebel>
        <input type="text" /> <br />
        <lebel >Name</lebel>
        <input type="text" /> <br />

    </form>}
    </div>

    
  )
}

export default ConditionalRendring
