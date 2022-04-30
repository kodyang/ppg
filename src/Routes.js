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
import { SiInstagram, SiTwitter } from "react-icons/si";

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 64px;
  background-color: #FCF1F2;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const LeftNavWrapper = styled.div`
  display: flex;
  flex: 1 1 67%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 26px;
  }
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
    max-height: 56px;    
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
  font-size: 17px;
`;

const InstaLink = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 1.5vw;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MainPage = styled.div`
  margin-top: 128px;
  
  @media (max-width: 768px) {
    margin-top: 64px;
  }
`;

const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

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
          <InstaLink href="https://twitter.com/pandemicpreg?lang=en" target="_blank">
            <SiTwitter />
          </InstaLink>
          <InstaLink href="https://www.instagram.com/pandemicpregnancyguide/?hl=en" target="_blank">
            <SiInstagram />
          </InstaLink>
        </RightNavWrapper>
      </Header>
      <MainPage>
        <Router primary={false}>
          <ScrollToTop path="/">
            <About path="/about" default />
            <Team path="/team" />
            <Sources path="/sources" />
            {/* <Media path='/media' /> */}
            <Contact path='/contact' />
          </ScrollToTop>
        </Router>

      </MainPage>
    </React.Fragment>
  );
}

export default Routes;