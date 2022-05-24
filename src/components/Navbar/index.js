import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Qoqopela</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='freebies' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Freebies </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Explore </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='matchup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Match Up </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Build </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;