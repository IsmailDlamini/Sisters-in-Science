import Header from "../components/Header";
import "./AboutPage.css";
import SiteVisual2Desktop from '../assets/SiteVisual2Desktop.png'
import Atom from '../assets/Atom.png'

const AboutPage = () => {
  return (
    <>
      <div className="about-page-container">
        <div className="information-container">
          <div className="text">
            <div className="content">
            <div className="main">
              Who are the Sisters <span>in</span> Science?
            </div>
            <div className="description">
              <div>
                Sisters in Science is a beacon of empowerment, dedicated to
                illuminating the path for teenage girls eager to explore the
                wonders of science. Our outreach program serves as a catalyst,
                igniting a passion for scientific discovery among young minds.
              </div>

              <div>
                Through strategic partnerships with local schools, we
                orchestrate a series of engaging workshops meticulously designed
                to bridge the gap between curiosity and comprehension. Each
                workshop serves as a vibrant platform, fostering hands-on
                experiences and interactive learning, ensuring that science
                isn't just a subject but an immersive journey filled with
                excitement and possibility.
              </div>

              <div>
                Since our inception, Sisters in Science has proudly championed
                the cause of inclusivity in STEM education. We believe in
                breaking down barriers and instilling confidence in young girls
                to pursue scientific endeavors fearlessly.
                
              </div>
            </div>

          <button>
          Contact Us
          </button>

            </div>
            
          </div>

          <div className="image">
            {/* <img src={SiteVisual2Desktop} alt="" /> */}
          </div>
        </div>

        <div className="projects"></div>

        <Header />

        <img src={Atom} className="atom-1-about" alt="" />
      <img src={Atom} className="atom-2-about" alt="" />
      <img src={Atom} className="atom-3-about" alt="" />
      
      </div>
    </>
  );
};

export default AboutPage;
