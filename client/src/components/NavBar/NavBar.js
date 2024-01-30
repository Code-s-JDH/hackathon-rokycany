import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { faBars, faCartShopping, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleNavScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleNavScroll);
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav id='navbar' className={`navPanel ${scrolled ? 'navbarScroll' : ''}`}>
        <NavLink to="/">
          <img src={logo} alt="" width="150" height="auto" />
        </NavLink>
        <div>
          <div className={`navLinks ${isMenuOpen ? 'showMenu' : 'hideNavLinks'}`}>
            <NavLink to="/">Domů</NavLink>
            <NavLink to="/jobs">Nabídka pozic</NavLink>
            <NavLink to="/contact">Kontakty</NavLink>
            <NavLink to="/account">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='hamburger' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
