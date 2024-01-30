import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (<>
    <footer>
      <img src={logo} alt="" width="150"></img>
      <div className="footerLinks">
        <div className="footerSocial">
          <a href="">
            <div>
              <FontAwesomeIcon icon={faFacebook} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="https://www.instagram.com/rtsoft.cz/" target='blank'>
            <div>
              <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="#">
            <div>
              <FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="tel:+420731190202">
            <div>
              <FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon>
            </div>
          </a>
          <a href="mailto:info@rtsoft.cz">
            <div>
              <FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon>
            </div>
          </a>
        </div>
        <div>
          <Link to="/" onClick={handleScrollToTop}>Domů</Link>
          <p>|</p>
          <Link to="/store" onClick={handleScrollToTop}>Nabídka pozic</Link>
          <p>|</p>
          <Link to="/contact" onClick={handleScrollToTop}>Kontakt</Link>
          <p>|</p>
          <Link to="/termsAndConditions" onClick={handleScrollToTop}>AdminPanel</Link>
        </div>
      </div>
      <div className="bottomInfo">
        <div className="fontHeader3">
          <p>2024 &copy; RTsoft - softwarová řešení na míru</p>
          <p>Vytvořil: Code'o JDH</p>
        </div>
      </div>
      <div className="blueGradientB"></div>
    </footer>
  </>
  )
}

export default Footer