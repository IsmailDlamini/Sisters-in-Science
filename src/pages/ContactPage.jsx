import Header from "../components/Header";
import Footer from "../components/Footer";
import Atom from "../assets/Atom.png";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page-container">
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

              <button>Send Message</button>
            </form>
          </div>
          <div className="image-container">
            <div className="image"></div>
          </div>
        </div>

        <Header />
        <img src={Atom} className="atom-1-contact" alt="" />
        <img src={Atom} className="atom-2-contact" alt="" />
        <img src={Atom} className="atom-3-contact" alt="" />
        <img src={Atom} className="atom-4-contact" alt="" />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
