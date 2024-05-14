import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Atom from "../assets/Atom.png";
import "./HomePage.css";
import "./ContactPage.css";
import LoadingSpinner from "../components/LoadingSpinner";

const ContactPage = () => {
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

      <div className="contact-page-container" ref={containerRef}>
        <div className="main-text">
          Get in touch with us <span>today!</span>
        </div>

        <div className="main-content">
          <div className="form-container">
            <form action="" method="post">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" placeholder="eg. Jane Doe" />
              <label htmlFor="">Email</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="eg. jane@gmail.com"
              />
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="eg. Hey, I would like some career guidance."
              ></textarea>

              <button id="purple-button">Send Message</button>
            </form>
          </div>
          <div className="image-container">
            <div className="image"></div>
          </div>
        </div>

        <Header />
        <img src={Atom} className="atom-1-contact rotating" alt="" />
        <img src={Atom} className="atom-2-contact rotating" alt="" />
        <img src={Atom} className="atom-3-contact rotating" alt="" />
        <img src={Atom} className="atom-4-contact rotating" alt="" />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
