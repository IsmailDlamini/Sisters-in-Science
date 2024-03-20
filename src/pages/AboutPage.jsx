import Header from "../components/Header";
import "./AboutPage.css";
import Atom from "../assets/Atom.png";
import projectImage1 from "../assets/site-image-06.jpg";
import projectImage2 from "../assets/site-image-05.jpg";
import projectImage3 from "../assets/site-image-07.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
                  illuminating the path for teenagers eager to explore the
                  wonders of science and technology. Our outreach program serves
                  as a catalyst, igniting a passion for scientific discovery
                  among young minds.
                </div>

                <div>
                  Through strategic partnerships with local schools, we
                  orchestrate a series of engaging workshops meticulously
                  designed to bridge the gap between curiosity and
                  comprehension. Each workshop serves as a vibrant platform,
                  fostering hands-on experiences and interactive learning,
                  ensuring that science isn{"'"}t just a subject but an immersive
                  journey filled with excitement and possibility.
                </div>

                <div>
                  Since our inception, Sisters in Science has proudly championed
                  the cause of inclusivity in STEAM education. We believe in
                  breaking down barriers and instilling confidence in young
                  girls and boys to pursue scientific endeavours fearlessly.
                </div>
              </div>

              <Link to={"/contact"} style={{textDecoration : "none"}}><button>Contact Us</button></Link>
            </div>
          </div>

          <div className="image">
            {/* <img src={SiteVisual2Desktop} alt="" /> */}
          </div>
        </div>

        <div className="project-section">
          <div className="text">
            What are we <span>doing?</span>
          </div>

          <div className="projects">
            <div className="project">
              <div className="description">
                <div>Rewarding Excellence</div>
                <div>
                  We set an emphasis on rewarding excellence among teenagers. By
                  recognizing and rewarding their outstanding performance, we
                  aim to motivate them to maintain their high level of
                  achievement.
                </div>
              </div>
              <div className="image">
                <img src={projectImage1} alt="" />
              </div>
            </div>

            <div className="project">
              <div className="description">
                <div>Closing Resources Gaps</div>
                <div>
                  We take concrete steps such as donating lab equipment and
                  providing assistance in science experiments. These actions are
                  aimed at empowering teenagers, particularly those with a keen
                  interest in science.
                </div>
              </div>
              <div className="image">
                <img src={projectImage2} alt="" />
              </div>
            </div>

            <div className="project">
              <div className="description">
                <div>Mentoring Tomorrow’s Professionals</div>
                <div>
                  We are deeply committed to shaping the work ethic of the
                  youth. We provide guidance and mentorship to help them develop
                  a professional attitude and instil in them the importance of
                  diligence at work. Our active involvement and support are
                  aimed at moulding them into the dedicated professionals of
                  tomorrow.
                </div>
              </div>
              <div className="image">
                <img src={projectImage3} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Header />

        <img src={Atom} className="atom-1-about" alt="" />
        <img src={Atom} className="atom-2-about" alt="" />
        <img src={Atom} className="atom-3-about" alt="" />
        <img src={Atom} className="atom-4-about" alt="" />

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
