import { useState } from "react";
import { Logo, MobileNav, MobileNavClose, MobileNavIcons, MobileNavLinks, MobileNavToggler, NavIcons, NavLinks, StyledNavbar } from "./styles/Navbar.styles";

import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Navbar = () => {

    const [toggleNav, setToggleNav] = useState(false);

    const navToggler = () => {
        setToggleNav(!toggleNav)
    }


    return (
        <StyledNavbar>
            <Logo>
                ibn
            </Logo>

            <NavLinks>
                <ul>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Hire Me</a></li>
                </ul>
            </NavLinks>

            <NavIcons>

                <span>
                    <FaLinkedin />
                </span>

                <span>
                    <FaTwitter />
                </span>

                <span>
                    <FaFacebook />
                </span>

                <span>
                    <FaInstagram />
                </span>

            </NavIcons>

            <MobileNavToggler >
                <FaBars size='2rem' onClick={() => navToggler()}/>
            </MobileNavToggler>

            {/* Navber for Mobile View */}
            <MobileNav toggle={toggleNav}>
                 <MobileNavClose>
                    <FaTimes size='2em' onClick={() => navToggler()}/>
                 </MobileNavClose>

                <MobileNavLinks>
                    <ul>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Hire Me</a></li>
                        <li><a href='#'>About Me</a></li>
                    </ul>
                </MobileNavLinks>

                <MobileNavIcons>
                    <span>
                        <FaLinkedin />
                    </span>

                    <span>
                        <FaGithub />
                    </span>
                    
                    <span>
                        <FaTwitter />
                    </span>
                </MobileNavIcons>
            </MobileNav>
        </StyledNavbar>
    );
}

export default Navbar;
