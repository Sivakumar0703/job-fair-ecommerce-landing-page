import React ,{ useState } from 'react'
import "./category.css"

const Category = () => {
    const [category , setCategory] = useState("all")
    function getCategory(e){
        setCategory(e.target?.innerText)
        console.log(e)
    }
  return (
    <div id="category-container">
        <div className='categories' onClick={getCategory}><span>Home</span></div>
        <div className='categories' onClick={getCategory}><span>Electronics</span></div>
        <div className='categories' onClick={getCategory}><span>Men</span></div>
        <div className='categories' onClick={getCategory}><span>Women</span></div>
        <div className='categories' onClick={getCategory}><span>Kids</span></div>
    </div>
  )
}

export default Category