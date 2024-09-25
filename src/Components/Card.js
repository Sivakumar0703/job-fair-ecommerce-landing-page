
import { useContext } from 'react'
import "../App.css"
import { ecomContext } from '../DataContext'

const Card = ({product}) => {

  const {setModalData} = useContext(ecomContext);

  function handleClick(prdt){
    setModalData(prdt)
  }

  return (
    <div className="card" onClick={() => handleClick(product)}  type="button" data-bs-toggle="modal" data-bs-target="#productModal">
      <div className='card-img-container'>
      <img src={product.image} class="card-img-top" alt={product.name} />
      </div>
  <div className="card-body">
    <h4 style={{overflow:"hidden"}}>{product.name.substring(0,15)}</h4>
    <hr/>
    <p className="card-text">{ product.description.substring(0,120) + "..."}</p>
    <hr/>
    <div style={{display:"flex",justifyContent:"space-between"}}><span>{`Price : ${product.price}`}</span>  <span>{`Quantity : ${product.quantity}`}</span></div>
  </div>
</div>

  )
}

export default Card