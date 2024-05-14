import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "./HomePage.css";
import Atom from "../assets/Atom.png";
//import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import siteImage01 from "../assets/site-image-01.jpg"

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = containerRef.current.querySelectorAll('*');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('rotating')) {
            entry.target.style.animation = 'rotate 20s linear infinite, fadein 2s ease forwards';
          } else {
            entry.target.style.animation = 'fadein 2s ease forwards';
          }
        }
        
      });
    });
  
    nodes.forEach((node) => {
      observer.observe(node);
    });
  
    return () => {
      nodes.forEach((node) => {
        observer.unobserve(node);
      });
    };
  }, []);

  return (
<>
<LoadingSpinner />

<div className="home-page-container" ref={containerRef}>
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
            <button id="purple-button">Learn More</button>{" "}
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <button id="clear-button"> Contact Us</button>{" "}
          </Link>
        </div>
      </div>

      <div className="image-container">
        <div className="img" >
          
        </div>
      </div>

      <Header />

      <img src={Atom} className="atom-1-home rotating" alt="" />
      <img src={Atom} className="atom-2-home rotating" alt="" />


    </div>
</>

    
  );
};

export default HomePage;
