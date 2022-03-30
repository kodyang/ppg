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

const HeadshotsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction:column;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

const HeadshotWrapper = styled.div`
  display: flex;
  flex: 0 1 31%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 0 1 auto;
    margin: 4vw 0;
  }
`;

const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1vw 0;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1vw;
`;

const Bio = styled.div``;
const BioTitle = styled.span`
  font-style: italic;
`;

const Headshot = styled.img`
  height: 15vw;
  width: 15vw;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 40vw;
    width: 40vw;
  }
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

const About = () => {
  return (
  <OuterWrapper>
    <Header>The Team</Header>
    <HeadshotsOuterWrapper>
      <HeadshotWrapper>
        <Headshot src={`drtali-cropped.jpg`} />
        <BioWrapper>
          <Name>Dr. Tali Bogler</Name>
          <Bio><BioTitle>Chair of Family Practice Obstretrics</BioTitle><br/>St. Michael's Hospital, Toronto</Bio>
        </BioWrapper>
      </HeadshotWrapper>
      <HeadshotWrapper>
        <Headshot src={`drsheila.jpg`} />
        <BioWrapper>
          <Name>Dr. Sheila Wijayasinghe</Name>
          <Bio><BioTitle>Family Physician</BioTitle><br/>St. Michael's Hospital, Toronto<br/><br/><BioTitle>Medical Director, Primary Care Outreach</BioTitle><br/>Women's College Hospital, Toronto</Bio>
        </BioWrapper>
      </HeadshotWrapper>
      <HeadshotWrapper>
        <Headshot src={`dreliane.jpg`} />
        <BioWrapper>
          <Name>Dr. Eliane Shore</Name>
          <Bio><BioTitle>Assistant Professor, Obstetrics &#38; Gynaecology</BioTitle><br/>St. Michael's Hospital, Toronto</Bio>
        </BioWrapper>
      </HeadshotWrapper>
    </HeadshotsOuterWrapper>
    <Header>About PPG</Header>
    <MainText>Pandemic Pregnancy Guide (PPG) is a team of physicians and medical trainees based in Toronto, Canada striving to provide reliable medical information to help new and expecting parents feel well informed about their pregnancy and COVID-19. 
      Pregnant and postpartum individuals still require care during the COVID-19 pandemic. With fewer in-person prenatal visits, less one-on-one time with providers, cancellation of prenatal group classes, and restrictions to hospital visitors, expecting parents might feel increasingly anxious during this time. We are here for you.
    </MainText>
    <SubHeader>Our main goals:</SubHeader>
    <MainText>&#8226; An accessible and reliable source of information on pregnancy and COVID-19 
      <br /> &#8226; Foster a global community for new and expecting parents
    </MainText>
    
    <Divider />


    <Disclaimer>Disclaimer:<br/>While this account is run by physicians, we are not your physicians. This content is for educational purposes only and is not intended to replace medical/treatment advice from your healthcare provider. Our goal is not to provide one-on-one counselling. Our understanding of COVID-19 is evolving daily, and the content presented on this account is based on information available at the time of this writing and is believed to be accurate according to the best discernment of the authors. Those who do not seek counsel from the appropriate health care authority assume the liability of any illness or injury which may occur. Please speak to your care provider if at any point you are concerned about your health and/or the health of your pregnancy or child.</Disclaimer>
  </OuterWrapper>);
}

export default About;