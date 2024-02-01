import facebookIcon from '../assets/facebookIcon.svg'
import linkedinIcon from '../assets/linkedinIcon.svg'
import footerSiteLogo from '../assets/footerSiteLogo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer">
          <Link to="/"><img src={footerSiteLogo} className="footer-logo" alt="" /></Link>
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
            © STEAM Academy | A Plus Systems
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