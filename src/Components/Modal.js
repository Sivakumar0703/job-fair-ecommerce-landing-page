import React from 'react'
import "./modal.css"

const Modal = () => {
  return (
    <div>
    {/* Button trigger modal  */}
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* Modal  */}
<div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="productModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        {/* product image */}
        <div id="modal-product-img-container">
            <img src="https://images8.alphacoders.com/451/451001.jpg" alt="product" />
        </div>

        {/* product details */}
        <div id="modal-product-detail-container">
            <h2>product title</h2>

            <h4>description</h4>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <hr/>
        </div>
      </div>

      <div style={{margin:"0 auto"}}>
        <p><span>price : 560</span> <span>quantity : 5</span></p>
        <p><span>Brand : some brand</span></p>
        </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</div>

</div>
  )
}

export default Modal