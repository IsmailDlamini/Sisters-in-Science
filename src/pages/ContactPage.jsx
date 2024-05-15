import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Atom from "../assets/Atom.png";
import "./HomePage.css";
import "./ContactPage.css";
import LoadingSpinner from "../components/LoadingSpinner";

const ContactPage = () => {

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
