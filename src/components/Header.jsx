import "./Header.css";
import SiteLogo from "../assets/SiteLogo.svg";
import ExternalLogo from "../assets/ExternalLogo.svg";
import MobileNavIconOpen from "../assets/MobileNavIconOpen.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (prop) => {
  const [navBarState, SetNaBarState] = useState(false);

  const ToggleMobileNavBar = () => {
    SetNaBarState(!navBarState);
  };
  return (
    <>
      <div className="PageHeader">
        <Link to={"/"} className="Logo">
          <img src={SiteLogo} className="SiteLogo" alt="SiteLogo" />
        </Link>

        <div className="NavBar">
          <ul>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <li style={{ color: prop.color }}>Home</li>
            </Link>
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              <li style={{ color: prop.color }}>About Us</li>
            </Link>
            <Link to={"/services"} style={{ textDecoration: "none" }}>
              <li style={{ color: prop.color }}>Services</li>
            </Link>
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              <li style={{ color: prop.color }}>Contact Us</li>
            </Link>
            <Link to={"/gallery"} style={{ textDecoration: "none" }}>
              <li style={{ color: prop.color }}>Gallery</li>
            </Link>
          </ul>
        </div>

        <div className="ExternalLink">
          <Link to={"https://steam-academy.co.za/"}>
          <img
            src={ExternalLogo}
            className="ExternalLogo"
            alt="sisters in science"
          />
          </Link>
        </div>

        <div className="MobileNav">
          <img
            src={MobileNavIconOpen}
            className="icon"
            onClick={ToggleMobileNavBar}
            alt=""
          />
        </div>
      </div>

      <div
        className={`MobileNavBar ${
          navBarState ? "MobileNavOpen" : "MobileNavClosed"
        }`}
      >
        <ul>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>About Us</li>
          </Link>
          <Link to={"/services"} style={{ textDecoration: "none" }}>
            <li>Services</li>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/gallery"} style={{ textDecoration: "none" }}>
            <li>Gallery</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"https://steam-academy.co.za/"}>
            <li>
              <img src={ExternalLogo} alt="sisters in science" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
