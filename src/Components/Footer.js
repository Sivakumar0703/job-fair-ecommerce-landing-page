import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
    <div id="footer" style={{color:"white"}}>

        <div id="footer-part-1">
            <h2>Get to Know Us</h2>
            <p>About e-Cart</p>
            <p>Careers</p>
            <p>Press Release</p>
        </div>

        <div id="footer-part-2">
            <h2>Connect with Us</h2>
            <p>Facebook</p>
            <p>Twitter - X</p>
            <p>Instagram</p>
        </div>

        <div id="footer-part-3">
            <h2>Let Us Help You</h2>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
        </div>

    </div>

    {/* <hr/>

    <div id="footer-address">

    </div> */}

    </div>
  )
}

export default Footer