import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss"
import Button from "../button/Button";
import logo from '/assets/taht_istanbul_logo.png'
import Dropdown from "../dropdown/dropdown";

// import {  AiOutlineInstagram  } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
// import { GrFacebookOption } from "react-icons/gr";
// import { FaXTwitter } from "react-icons/fa6";



const Navbar = () => {
    
    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);
    
    
    // DropdownMenu ///////////////////////////
    
    const currencies = ['USD', 'EUR', 'GBP'];
    const languages = ['EN', 'TR', 'RU', 'AR'];

    const handleClick = () => {
        setClicked(!click);
    }

    const handleCloseMobileMenu = () => {
        setShowNav(false)
    }

    useEffect(() => {
        const nav = document.querySelector(".navbar-container");
        
        const handleScroll = () => {
            const shouldSticky = window.scrollY > 80;
            nav.classList.toggle("sticky", shouldSticky);
            if (shouldSticky) {
            nav.style.background = "rgba(255, 255, 255, 0.1)";
            nav.style.backdropFilter = "blur(20px)";
            nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";
            } else {
            nav.style.background = "none";
            nav.style.backdropFilter = "none";
            nav.style.borderBottom = "none";
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);
      

    const [language, setLanguage] = useState(languages[0]);
    const [currency, setCurrency] = useState(currencies[0]);

    return (
        <header className="navbar-container sticky">
            <NavLink to="/" className="navbar-logo">
                <img src={logo} alt="logo" />
            </NavLink>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <GrClose /> : <HiMenuAlt3 />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                    <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
                </li>
                <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                    <NavLink to="/concepts" className="nav-link">Concepts</NavLink>
                </li>
                <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                    <NavLink to="/about-us" className="nav-link">About-Us</NavLink>
                </li>
                <li className="nav-link-items" onClick={handleCloseMobileMenu}>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
            <div className={click ? "nav-buttonIcon active" : "nav-buttonIcon"}>
                <Button text="BOOK NOW" link="#" />
                <Dropdown 
                    options={languages}
                    currentOption={language}
                    onChange={setLanguage}
                    fontSize={"15px"}
                    color={"whitesmoke"}
                    optionColor={"#7E7E86"}
                    optionFontSize={"15px"}
                />
                <Dropdown 
                    options={currencies}
                    currentOption={currency}
                    onChange={setCurrency}
                    fontSize={"15px"}
                    color={"whitesmoke"}
                    optionColor={"#7E7E86"}
                    optionFontSize={"15px"}
                />
            </div>
        </header>
    )
}

export default Navbar
