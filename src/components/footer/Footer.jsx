import { AiOutlineInstagram } from "react-icons/ai"
import "./Footer.scss"
import { GrFacebookOption } from "react-icons/gr"
import { FaXTwitter } from "react-icons/fa6"

import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="foot">
      <div className="spacer layer1"></div>
      <div className="footer">  
        <div className="left">
          {/* Place your logo image here */}
          <img src="/assets/taht_istanbul_logo.png" alt="Logo" />
        </div>
        <div className="middle">
          <ul className="link-items">
            <li className="link-item">
              <NavLink className="link">Home</NavLink>
              </li>
            <li className="link-item">
              <NavLink to="/pricing" className="link">Pricing</NavLink>
              </li>
            <li className="link-item">
              <NavLink to="concepts" className="link">Concepts</NavLink>
              </li>
            <li className="link-item">
              <NavLink to="about-us" className="link">About Us</NavLink>
              </li>
            <li className="link-item">
              <NavLink to="contact" className="link">Contact</NavLink>
              </li>
          </ul>
          <p className="">© Taht Istanbul 2021. All Rights Reserved</p>
        </div>
        <div className="right">
            <a href="http://" target="_blank" className="icon-link" rel="noreferrer">
                <AiOutlineInstagram size={25} color="#a3acbd" className="icon-link-icon"/>
            </a>
            <a href="http://" className="icon-link" target="_blank" rel="noreferrer">
                <GrFacebookOption size={25} color="#a3acbd" className="icon-link-icon"/>
            </a>
            <a href="http://" className="icon-link" target="_blank" rel="noreferrer">
                <FaXTwitter size={25} color="#a3acbd" className="icon-link-icon"/>
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
