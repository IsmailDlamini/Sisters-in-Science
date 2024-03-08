import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ServicesPage.css";
import serviceImage1 from "../assets/serviceImage1.png"
import serviceImage2 from "../assets/serviceImage2.png"
import serviceImage3 from "../assets/serviceImage3.png"
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
            <button>Enquire Today</button>
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
            <button>Enquire Today</button>
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
            <button>Enquire Today</button>
            <div className="image">
              <img src={serviceImage3} alt="" />
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
