import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
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
          <a href="#">
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </a>
          <a href="#">
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="#">
            <div>
              <i className="fa-brands fa-google"></i>
            </div>
          </a>
          <a href="#">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
          </a>
          <a href="#">
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
          </a>
          <a href="#">
            <div>
              <i className="fa-brands fa-facebook"></i>
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