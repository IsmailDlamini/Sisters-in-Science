import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css";
import "./ServicesPage.css";
import serviceImage1 from "../assets/site-image-02.jpg"
import serviceImage2 from "../assets/site-image-03.jpg"
import serviceImage3 from "../assets/site-image-04.jpg"
import Atom from "../assets/Atom.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const ServicesPage = () => {
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

      <div className="services-page-container" ref={containerRef}>
        <div className="page-text">
          What can we do for <span>you?</span>
        </div>

        <div className="services">
          <div className="service">
            <div className="service-title">Mentorship</div>
            <div className="service-description">
              Our initiatives are designed to ensure employability and
              professionalism among teenagers, particularly those interested in
              science. We provide them with the guidance and resources they need
              to explore diverse scientific pathways. Our aim is to help them
              navigate their passions effectively, thereby fostering their
              professional growth and ensuring their readiness for the future
              workplace.
            </div>
            <Link to="/contact" style={{textDecoration: "none"}}><button id="clear-button">Enquire Today</button></Link>
            <div className="image">
              <img src={serviceImage1} alt="" />
            </div>
          </div>

          <div className="service">
            <div className="service-title">Outreach Programs</div>
            <div className="service-description">
              Our outreach initiatives extend beyond the classroom, reaching out
              to local communities to inspire and engage young learners in the
              fascinating world of science. These programs aim to break barriers
              by making science accessible and exciting, nurturing an interest
              in STEAM disciplines from an early age.
            </div>
            <Link to="/contact" style={{textDecoration: "none"}}><button id="clear-button">Enquire Today</button></Link>
            <div className="image">
              <img src={serviceImage2} alt="" />
            </div>
          </div>

          <div className="service">
            <div className="service-title">Career Guidance</div>
            <div className="service-description">
              Empowering young minds with the guidance they need, our
              career-focused sessions provide invaluable insights into the
              diverse pathways within the realm of science. We offer mentorship
              and resources to help teenage girls navigate and pursue their
              passions in the scientific field.
            </div>
            <Link to="/contact" style={{textDecoration: "none"}}><button id="clear-button">Enquire Today</button></Link>
            <div className="image">
              <img src={serviceImage3} alt="" />
            </div>
          </div>
        </div>

        <Header />
        <Footer />

        <img src={Atom} className="atom-1-services rotating" alt="" />
        <img src={Atom} className="atom-2-services rotating" alt="" />
        <img src={Atom} className="atom-3-services rotating" alt="" />
        <img src={Atom} className="atom-4-services rotating" alt="" />
      </div>
    </>
  );
};

export default ServicesPage;
