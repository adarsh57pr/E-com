import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ViewRecipe = () => {
    let location = useLocation();
    // let navigate = useNavigate()
    console.log(location)
    let recipe = location.state.recipe

    // const methodClick = (ans)=>{
    //   // console.log(ans)
    //   // navigate(/${ans})
    // }
  return (
    <div className='container '>
        <div className="row">
          <div className="col-md-4  d-flex justify-content-center">
            <img className="rounded" src={location.state.recipe.image} alt="" />
          </div>
          <div className="col-md-8 ">
              <h3 className='my-3'>Title: {recipe.label}</h3>
              <h4 className='my-3'>MealType: {recipe.mealType[0]}</h4>
              <h5 className='my-3'>cuisineType: {recipe.cuisineType}</h5>
              <Link to={recipe.url} className='btn btn-dark my-3'>Recipe method</Link>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <ul>
              <h3> Ingredient lines</h3>
              {recipe.ingredientLines.map((ele)=>{
                return <li>{ele}</li>
              })}
            </ul>
          </div>
          <div className="col-md-6">
         
          <ul>
              <h3>  healthLabels</h3>
              {recipe. healthLabels.map((ele)=>{
                return <li>{ele}</li>
              })}
            </ul>
          </div>
        </div>
     
    </div>
  )
}

export default ViewRecipe