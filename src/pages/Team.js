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

const Bio = styled.div`
  text-align: center;
`;

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

const Team = () => {
  return (
  <OuterWrapper>
    <Header>Founders</Header>
    <HeadshotsOuterWrapper>
      <HeadshotWrapper>
        <Headshot src={`drtali.jpg`} />
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
  </OuterWrapper>);
}

export default Team;