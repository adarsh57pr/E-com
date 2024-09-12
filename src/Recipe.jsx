import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Recipe = () => {
  let searchRef = useRef()
  const [recipes, setrecipes] = useState([]);
  const [searchItem, setsearchItem] = useState("pizza");
  console.log(recipes)

  const getAllRecipe = async () => {
    let res = await fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=7442af9a&app_key=3a95c099faea27e5c7bcc842f1bb689b`)
    let data = await res.json()
    console.log(data.hits)
    setrecipes(data.hits)

  }

  useEffect(() => {
    getAllRecipe()
  }, [searchItem])

  const handleSearch =(e)=>{
    e.preventDefault()
    let value = searchRef.current.value;
    console.log(value)
    setsearchItem(value)
  }

  return (

    <div>
      <form className="d-flex w-50 m-auto my-3 border" role="search">
        <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className='row m-0 p-0 justify-content-center gap-3 container m-auto bg-dark rounded mt-2'>


        {recipes.map((ele) => {
          return <div className="card" style={{ width: '18rem',marginTop:"15px" }}>
            <img src={ele.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{ele.recipe.label}</h5>
              {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <Link to="/view" state={ele} className="btn btn-primary">view recipe</Link>

            </div>
          </div>

        })}
      </div>
    </div>


  )
}

export default Recipe