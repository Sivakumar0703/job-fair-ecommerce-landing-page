import "./modal.css"
import { ecomContext } from '../DataContext'
import { useContext } from 'react'

const Modal = () => {
  const {modalData} = useContext(ecomContext)
  return (
    <div>

{/* Modal  */}
<div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="productModalLabel">{modalData?.name}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        {/* product image */}
        <div id="modal-product-img-container">
            <img src={modalData?.image} alt={modalData?.name} />
        </div>

        {/* product details */}
        <div id="modal-product-detail-container">
            <h4>Description</h4>
            <p> {modalData?.description} </p>
            <hr/>
        </div>
      </div>

      <div style={{margin:"0 auto"}}>
        <p><span>{`Price : ₹ ${modalData?.price}`}</span>  |  <span>{`Quantity : ${modalData?.quantity}`}</span></p>
      </div>
    
      <p style={{marginLeft:"10px"}}>Brand : <span className="badge text-bg-info"> {`${modalData?.brand}`}</span></p>
      <div>

      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default Modal