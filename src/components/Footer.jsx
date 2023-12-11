import facebookIcon from '../assets/facebookIcon.svg'
import linkedinIcon from '../assets/linkedinIcon.svg'
import footerSiteLogo from '../assets/footerSiteLogo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
          <img src={footerSiteLogo} className="footer-logo" alt="" />
          <div className="information">
            <div className="nav">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
              
            </div>
            <div className="credits">
            © Sisters in Science | A Plus Systems
            </div>
          </div>

      <div className="social-icons">
        <img src={facebookIcon} alt="" />
        <img src={linkedinIcon} alt="" />
      </div>

        </div>
    </>
  )
}

export default Footer