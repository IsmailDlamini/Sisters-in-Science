import Header from "../components/Header";
import "./HomePage.css";
import Atom from "../assets/Atom.png";

const HomePage = () => {
  return (
    
      <div className="home-page-container">
        <div className="information-container">
          <div className="content">
            <div>
              Empowering <span>Teenage Girls</span> with <span>Science</span>{" "}
              Since 2010
            </div>
            <div>
              <span>Welcome to Sisters in Science!</span> For over a decade, our
              commitment has been consistent in igniting a passion for science
              among teenage girls. Through dynamic programs, hands-on workshops,
              and mentorship initiatives, we've cultivated an environment where
              curiosity thrives and possibilities are endless. To learn more,
              click the buttons below.
            </div>
          </div>

          <div className="buttons">
            <button>Learn More</button>
            <button>Contact Us</button>
          </div>
        </div>

        <div className="image-container">
          <div className="img">
            
          </div>
        </div>

        <Header />

        <img src={Atom} className="atom-1-home" alt="" />
      <img src={Atom} className="atom-2-home" alt="" />
      </div>

      
    
  );
};

export default HomePage;
