import Header from "../components/Header";
import "./HomePage.css";
import Atom from "../assets/Atom.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
//import { useEffect } from "react";

const HomePage = () => {

  // before adding the changes that caeser made and the loading animation

  return (
    <div className="home-page-container">
      <div className="information-container">
        <div className="content">
          <div>
            Empowering <span>Teenagers</span> with <span>Science</span> Since
            2013
          </div>
          <div>
            <span>Welcome to Sisters in Science! </span> For over a decade, our
            commitment has been consistent in igniting a passion for science and
            technology among teenagers. Through dynamic programs, hands-on
            workshops, and mentorship initiatives, we{"'"}ve cultivated an
            environment where curiosity thrives and possibilities are endless.
            To learn more, click the buttons below.
          </div>
        </div>

        <div className="buttons">
          <Link to={"/services"} style={{ textDecoration: "none" }}>
            <button id="home">Learn More</button>{" "}
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <button id="home-contact"> Contact Us</button>{" "}
          </Link>
        </div>
      </div>

      <div className="image-container">
        <div className="img"></div>
      </div>

      <Header />

      <img src={Atom} className="atom-1-home" alt="" />
      <img src={Atom} className="atom-2-home" alt="" />

      <Footer />
    </div>
  );
};

export default HomePage;
