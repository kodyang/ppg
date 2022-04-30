import React, {useState} from 'react';
import { Link } from "@reach/router";

import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";

const OuterWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const IconWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const MenuBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #FCF1F2;
`;


const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4vw 2vw;
`;

const LinkWrapper = styled.div`
  margin: 8px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 24px;
`;

const StyledExternalLink = styled.a`
color: black;
text-decoration: none;
font-size: 24px;
`;

const Hamburger = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <OuterWrapper>
      {isOpen && <MenuBackground>
        <LinksWrapper>
            <LinkWrapper onClick={() => setIsOpen(!isOpen)}><StyledLink to='/about'>About</StyledLink></LinkWrapper>
            <LinkWrapper onClick={() => setIsOpen(!isOpen)}><StyledLink to='/team'>Team</StyledLink></LinkWrapper>
            <LinkWrapper onClick={() => setIsOpen(!isOpen)}><StyledLink to='/sources'>Search</StyledLink></LinkWrapper>
            <LinkWrapper onClick={() => setIsOpen(!isOpen)}><StyledExternalLink href="https://www.instagram.com/pandemicpregnancyguide/channel/" target="_blank">Media</StyledExternalLink></LinkWrapper>
            <LinkWrapper onClick={() => setIsOpen(!isOpen)}><StyledLink to='/contact'>Contact</StyledLink></LinkWrapper>
          </LinksWrapper>
        </MenuBackground>}
      <IconWrapper onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu />
      </IconWrapper>
    </OuterWrapper>
  );
}

export default Hamburger;