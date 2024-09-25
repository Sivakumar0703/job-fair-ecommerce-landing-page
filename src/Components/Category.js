import { useContext } from 'react'
import "./category.css"
import { ecomContext } from '../DataContext'
import { useState } from 'react'


const Category = () => {
const{setCategory} = useContext(ecomContext);
const[prevSelectedElement , setPrevSelectedElement] = useState("")
const[flag , setFlag] = useState(false)

function getCategory(e){

  if(flag){
    prevSelectedElement.classList.remove('active-category');
    setPrevSelectedElement("");
    setFlag(false);
  }
  setCategory(e.target?.innerText)
  const div = e.target;
  div.classList.add('active-category');
  setPrevSelectedElement(e.target);
  setFlag(true);
}

  return (
    <div id="category-container">
        <div className='categories' onClick={getCategory}>Home</div>
        <div className='categories' onClick={getCategory}>Electronics</div>
        <div className='categories' onClick={getCategory}>Men</div>
        <div className='categories' onClick={getCategory}>Women</div>
        <div className='categories' onClick={getCategory}>Kids</div>
    </div>
  )
}

export default Category