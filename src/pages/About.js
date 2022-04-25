import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 18vw 1vw;

  @media (max-width: 768px) {
    padding: 0 16px 4px;
  }
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
  align-self: center;
  margin: 6vw 0 3vw;

  @media (max-width: 768px) {
    margin: 9vw 0 6vw;
  }
`;

const MainText = styled.div`
  font-size: 17px;
  line-height: 1.5em;
`;

const SubHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 2vw 0;
`;

const Divider = styled.div`
  align-self: stretch;
  background-color: lightgray;
  height: 1px;
  margin: 4vw 0;
  
  @media (max-width: 768px) {
    margin: 32px 0;
  }
`;

const Disclaimer = styled.div`
  font-size: 11px;
`;

const SponsorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sponsor = styled.img`
  width: 15vw;

  @media (max-width: 768px) {
    width: 50vw;
    margin-bottom: 4vw;
  }
`;

const SponsorLink = styled.a``;

const About = () => {
  return (
  <OuterWrapper>
    <Header>About PPG</Header>
    <MainText>Pandemic Pregnancy Guide (PPG) is a team of physicians and medical trainees based in Toronto, Canada striving to provide reliable medical information to help new and expecting parents feel well informed about their pregnancy and COVID-19. 
      Pregnant and postpartum individuals still require care during the COVID-19 pandemic. With fewer in-person prenatal visits, less one-on-one time with providers, cancellation of prenatal group classes, and restrictions to hospital visitors, expecting parents might feel increasingly anxious during this time. We are here for you.
    </MainText>
    <SubHeader>Our main goals:</SubHeader>
    <MainText>&#8226; An accessible and reliable source of information on pregnancy and COVID-19 
      <br /> &#8226; Foster a global community for new and expecting parents
    </MainText>

    <Header>Special Thanks to our Sponsors</Header>

    <SponsorsWrapper>
      <Sponsor src={`manulife.png`} />
      <Sponsor src={`mbna.png`} />
      <Sponsor src={`td.png`} />
    </SponsorsWrapper>

    <MainText>Learn more at <SponsorLink href="https://www.affinity.utoronto.ca" rel="noopener" target="_blank">affinity.utoronto.ca</SponsorLink></MainText>

    <Divider />

    <Disclaimer>Disclaimer:<br/>While this account is run by physicians, we are not your physicians. This content is for educational purposes only and is not intended to replace medical/treatment advice from your healthcare provider. Our goal is not to provide one-on-one counselling. Our understanding of COVID-19 is evolving daily, and the content presented on this account is based on information available at the time of this writing and is believed to be accurate according to the best discernment of the authors. Those who do not seek counsel from the appropriate health care authority assume the liability of any illness or injury which may occur. Please speak to your care provider if at any point you are concerned about your health and/or the health of your pregnancy or child.</Disclaimer>
  </OuterWrapper>);
}

export default About;