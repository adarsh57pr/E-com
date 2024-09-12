import React, { useRef, useState } from 'react'

const ExpenseTracker = () => {

  const [clicked, setclicked] = useState(false)
  

let snoRef = useRef()
let placeRef = useRef()
let priceRef = useRef()

    const [arr,setarr] = useState(
       [
        {
            id:1,
            place:'Ayodhya',
            price:'10000'
        },
        {
            id:2,
            place:'Rameshwaram',
            price:'15000'
        },
        {
            id:3,
            place:'Vashnodevi',
            price:'20000'
        },
        {
            id:4,
            place:'Kedarnath',
            price:'20000'
        }
    ]
    )
    const handleSubmit = (e)=>{
      e.preventDefault();
      let obj = {
        id:snoRef.current.value,
        place:placeRef.current.value,
        price:priceRef.current.value
      }
      console.log(obj)

      // setarr([...arr,obj])

      if(obj.id && obj.place && obj.price){
        setarr([...arr,obj])
      }
      else{
        alert("please fill the value")
      }
    }

    const handelDelete = (ans ,index)=>{
// method-1 
      // console.log(ans,index)

      // let copyArr = [...arr]
      // // console.log(copyArr)

      // copyArr.splice(index,1)
      // // console.log(copyArr)

      // setarr(copyArr)

    //  // method-2 
    //  Ex.> let arr = [5,3,6,7,9,8]
    //       let ans = arr.filter((ele)=>ele!=3)
    //   result ->   [5,6,,7,9,8]   
      
       let i = arr.findIndex((ele)=>ele.id===ans.id)
     // console.log(i)

       let filteredArr = arr.filter((ele)=>ele.id!==ans.id)
       console.log(filteredArr)

       setarr(filteredArr)

     

    }

    

  return (
    <div>
      <h1 className='text-center'>expense tracker app..</h1>

      
        {/* <p>{arr[0].place}</p>
        <p>{arr[0].price}</p>
      
        <p>{arr[1].place}</p>
        <p>{arr[1].price}</p>
       */}
        
        {/* OR........ */}

       {/* {
        arr.map((obj)=>{

            return <div>
                <p>{obj.place}</p>
                <p>{obj.price}</p>
            </div>
                    
        })
       } */}

       <div className='text-center'>
       <button onClick={()=>setclicked(true)} className='btn btn-info my-2'>Add expense</button>
       </div>

      {clicked &&  <form style={{width:"max-content"}} className='formto d-flex gap-2 bg-dark my-3 mx-auto p-3 rounded'>

       <button onClick={()=>setclicked(false)} className=' btn-close bg-white'></button>
             <input type='number' placeholder='SNo.' ref={snoRef}className='rounded px-2'/>
             <input type='text' placeholder='enter the place' ref={placeRef}className='rounded px-2'/>
             <input type='number' placeholder='enter the price' ref={priceRef}className='rounded px-2'/>
             <button  onClick={handleSubmit} className='btn btn-success'>Add Item</button>
       </form>}

<table className="table table-dark w-75 m-auto text-center table-rounded" >
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
          {
            arr.map((obj , i)=>{
                return    <tr key={obj.id}>
                             <th scope="row">{i+1}</th>
                             <td>{obj.place}</td>
                             <td>{obj.price}</td>
                             <td><button onClick={()=>handelDelete(obj,i)} className="btn btn-secondary">Delete</button></td>
                         </tr>
            })
          }
    
  </tbody>
</table>


    </div>
  )
}

export default ExpenseTracker
