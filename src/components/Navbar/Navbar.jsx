import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          {/* <a href="#home">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          {/* <a href="#about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          {/* <a href="#menu">Menu</a> */}
          <Link to="/menu">Menu</Link>
        </li>
        <li className="p__opensans">
          {/* <a href="#awards">Awards</a> */}
          <Link to="/awards">Awards</Link>
        </li>
        <li className="p__opensans">
          {/* <a href="#contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                {/* <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a> */}
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                {/* <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a> */}
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                {/* <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a> */}
                <Link to="/menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li>
                {/* <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a> */}
                <Link to="/awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </Link>
              </li>
              <li>
                {/* <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a> */}
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
