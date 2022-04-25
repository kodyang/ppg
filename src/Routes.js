import React from 'react';
import { Router, Link } from "@reach/router";

import About from './pages/About';
import Sources from './pages/Sources';
import Team from './pages/Team';
// import Media from './pages/Media';
import Contact from './pages/Contact';
import Hamburger from './components/Hamburger';

import styled from 'styled-components';
import logo from './assets/ppg-profile.jpg';
import { SiInstagram } from "react-icons/si";

const Header = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.1vw 3vw;
  background-color: #FCF1F2;

  @media (max-width: 768px) {
    padding: 2vw 4vw;
  }
`;

const LeftNavWrapper = styled.div`
  display: flex;
  flex: 1 1 67%;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1 1 34%;
  justify-content: space-around;
`;

const Logo = styled.img`
  max-height: 104px;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-height: 15vw;    
  }
`;

const RightNavWrapper = styled.div`
  display: flex;
  flex: 1 1 33%;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 18px;

  @media (max-width: 768px) {
    flex: 0 1 auto;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex: 1 1 33%;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  margin: 8px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const InstaLink = styled.a`
  color: black;
  text-decoration: none;
`;


function Routes() {
  return (
    <React.Fragment>
      <Header>
        <Hamburger />
        <LeftNavWrapper>
          <LinksWrapper>
            <LinkWrapper><StyledLink to='/about'>About</StyledLink></LinkWrapper>
            <LinkWrapper><StyledLink to='/team'>Team</StyledLink></LinkWrapper>
            <LinkWrapper><StyledLink to='/sources'>Search</StyledLink></LinkWrapper>
            {/* <LinkWrapper><StyledLink to='/media'>Media</StyledLink></LinkWrapper> */}
            <LinkWrapper><StyledLink to='/contact'>Contact</StyledLink></LinkWrapper>
          </LinksWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="Logo" />
          </LogoWrapper>
        </LeftNavWrapper>
        <RightNavWrapper>
          <InstaLink href="https://www.instagram.com/pandemicpregnancyguide/?hl=en" target="_blank">
            <SiInstagram />
          </InstaLink>
        </RightNavWrapper>
      </Header>
      <Router>
        <About path="/about" default />
        <Team path="/team" />
        <Sources path="/sources" />
        {/* <Media path='/media' /> */}
        <Contact path='/contact' />
      </Router>
    </React.Fragment>
  );
}

export default Routes;