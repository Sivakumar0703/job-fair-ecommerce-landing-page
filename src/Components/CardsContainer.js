import React from 'react'
import Card from './Card'
import "../App.css"

const CardsContainer = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
// <div style={{width:"100vw",margin:"auto"}}>
    <div id="cards-container">
        {
           arr.map((ele) =>{
            return <div key={ele}> <Card /></div>
           }) 
        }
    </div>

    // </div>

  )
}

export default CardsContainer