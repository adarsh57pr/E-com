import React, { useEffect, useState } from 'react'

const EffectShow = () => {
    const [clicked , setclicked] = useState(false);
    // console.log(clicked)

    useEffect(()=>{
        console.log("i am here..")
    },[])


  return (
   <div class="counter">
         <h1>Use to useEffect..</h1>
         <button className='btn btn-info' onClick={()=>setclicked()}>click here</button>
   </div>
  )
}

export default EffectShow
