import { useContext } from 'react'
import "./category.css"
import { ecomContext } from '../DataContext'

const Category = () => {
const{setCategory} = useContext(ecomContext);

function getCategory(e){
  setCategory(e.target?.innerText)
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