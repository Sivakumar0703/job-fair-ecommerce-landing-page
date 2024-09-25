import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook ,faXTwitter , faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
    <div id="footer" style={{color:"white"}}>

        <div id="footer-part-1">
            <h2>Get to Know Us</h2>
            <p className='footer-links'>About e-Cart</p>
            <p className='footer-links'>Careers</p>
            <p className='footer-links'>Press Release</p>
        </div>

        <div id="footer-part-2">
            <h2>Connect with Us</h2>
            <p className='footer-links'> <span><FontAwesomeIcon icon={faFacebook} /></span> Facebook </p>
            <p className='footer-links'> <span><FontAwesomeIcon icon={faXTwitter} /></span> Twitter </p>
            <p className='footer-links'> <span><FontAwesomeIcon icon={faInstagram} /></span> Instagram</p>
        </div>

        <div id="footer-part-3">
            <h2>Let Us Help You</h2>
            <p className='footer-links'>Your Account</p>
            <p className='footer-links'>Returns Centre</p>
            <p className='footer-links'>100% Purchase Protection</p>
        </div>

    </div>

    </div>
  )
}

export default Footer