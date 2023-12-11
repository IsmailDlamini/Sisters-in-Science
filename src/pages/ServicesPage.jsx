import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ServicesPage.css";
import projectImage1 from "../assets/projectImage1.png";
import projectImage2 from "../assets/projectImage2.png";
import projectImage3 from "../assets/projectImage3.png";
import Atom from "../assets/Atom.png";

const ServicesPage = () => {
  return (
    <>
      <div className="services-page-container">
        <div className="page-text">
          What can we do for <span>you?</span>
        </div>

        <div className="services">
          <div className="service">
            <div className="service-title">Workshops</div>
            <div className="service-description">
              Our workshops are vibrant hubs of scientific exploration, designed
              to captivate and educate teenage girls in various scientific
              domains. Through interactive sessions and hands-on activities, we
              ignite curiosity, fostering a love for science and its practical
              applications.
            </div>
            <button>Enquire Today</button>
            <div className="image">
              <img src={projectImage1} alt="" />
            </div>
          </div>

          <div className="service">
            <div className="service-title">Outreach Programs</div>
            <div className="service-description">
              Our outreach initiatives extend beyond the classroom, reaching out
              to local communities to inspire and engage young girls in the
              fascinating world of science. These programs aim to break barriers
              by making science accessible and exciting, nurturing an interest
              in STEM disciplines from an early age.
            </div>
            <button>Enquire Today</button>
            <div className="image">
              <img src={projectImage2} alt="" />
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
            <button>Enquire Today</button>
            <div className="image">
              <img src={projectImage3} alt="" />
            </div>
          </div>
        </div>

        <Header />
        <Footer />

        <img src={Atom} className="atom-1-services" alt="" />
        <img src={Atom} className="atom-2-services" alt="" />
        <img src={Atom} className="atom-3-services" alt="" />
        <img src={Atom} className="atom-4-services" alt="" />
      </div>
    </>
  );
};

export default ServicesPage;
