import React from 'react'
import './index'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import PNF from './PNF'
import Counter from './Counter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Navbar from './components/Navbar'
import ExpenseTracker from './expenseTracker'
import ConditionalRendring from './ConditionalRendring'
import EffectShow from './EffectShow'
import Recipe from './Recipe'
import ViewRecipe from './ViewRecipe'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
         
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/expense' element={<ExpenseTracker/>}/>
        <Route path='/conditional' element={<ConditionalRendring/>}/>
        <Route path='/effect' element={<EffectShow/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/view' element={<ViewRecipe/>}/>

        <Route path='/*' element={<PNF/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
