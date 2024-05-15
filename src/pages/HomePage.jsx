import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "./HomePage.css";
import Atom from "../assets/Atom.png";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const containerRef = useRef(null);
  const [doneLoading, setDoneLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDoneLoading(true);
    }, 1800);

    if (doneLoading) {
      const nodes = containerRef.current.querySelectorAll("*");
      nodes.forEach((node) => {
        node.classList.add("fade-in");
      });
      const elements = containerRef.current.querySelectorAll(".fade-in");

      const AppearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -10px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("appear");
            }
          }
        });
      }, AppearOptions);

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
        clearTimeout(timeoutId);
      };
    } else {
      const nodes = containerRef.current.querySelectorAll("*");
      nodes.forEach((node) => {
        node.classList.add("fade-in");
      });
    }
  }, [doneLoading]);

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
