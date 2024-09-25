
import { useContext } from 'react'
import "../App.css"
import { ecomContext } from '../DataContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
    <div className='card-foot'>
      <span>{`Price : ₹ ${product.price}`}</span>  <button className='btn btn-primary'>Add To Cart <FontAwesomeIcon icon={faCartPlus} /></button>
    </div>
  </div>
</div>

  )
}

export default Card