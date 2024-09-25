// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "../App.css"

const Card = () => {
  return (
    <div className="card"  type="button" data-bs-toggle="modal" data-bs-target="#productModal">
    {/* <div className="card" style={{width: "18rem"}}> */}
  <img src="https://images8.alphacoders.com/451/451001.jpg" class="card-img-top" alt="mobile" />
  {/* <span><FontAwesomeIcon icon={faCircleInfo} /></span> */}
  <div className="card-body">
    <h3>Mobile phone</h3>
    <hr/>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <hr/>
    <div style={{display:"flex",justifyContent:"space-between"}}><span>price : 250 </span>  <span>qty: 5</span></div>


  </div>
</div>
  )
}

export default Card