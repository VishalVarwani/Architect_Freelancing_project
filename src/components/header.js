import React from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faFacebookF , faInstagram,
} from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <div style={{marginTop:-50}}>
      
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="#" className="navbar-brand">
      <img style={{height:"194px"}} src="images/logo_2.png" alt="CoolBrand" />
    </Link>
    <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse" // Make sure this matches the ID of the collapsible element
          >
            <span className="navbar-toggler-icon" />
            </button>

    <div style={{justifyContent:"space-between",  marginLeft: "20%" }}className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active nav-font">Home</Link>
        
      <div className="nav-item dropdown">
  <Link to="/teams" className="nav-item nav-link active nav-font">About</Link>

</div>
<Link style={{fontWeight:"600"}}to="/services" className="nav-item nav-link active nav-font">Services</Link>

     <Link to="/contact" className="nav-item nav-link active nav-font" >Contact Us</Link>
      </div>
      
      <div className='socialtop'>
    <div className="top-social">
               <Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  </Link>
                </div>
                </div>
    </div>
    
  </div>

</nav>

    </div>
  )
}
