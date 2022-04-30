import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3vw 18vw 4vw;

  @media (max-width: 768px) {
    padding: 0 16px 4px;
  }
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 600;
  align-self: center;
  margin: 3vw 0 3vw;

  @media (max-width: 768px) {
    margin: 9vw 0 6vw;
  }
`;

const HeadshotsOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction:column;
    justify-content: flex-start;
    align-items: stretch;
  }
`;

const FounderHeadshotWrapper = styled.div`
  display: flex;
  flex: 0 1 31%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex: 0 1 auto;
    margin: 4vw 0;
  }
`;

const StudentsHeadshotWrapper = styled.div`
  display: flex;
  flex: 0 1 20%;
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
  text-align: center;
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

const StudentHeadshot = styled.img`
  height: 10vw;
  width: 10vw;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 40vw;
    width: 40vw;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  align-self: center;
  text-align: center;
`;

const students = [
  {
    'name': 'Alison Wong',
    'src': 'Alison_Wong.jpg'
  },
  {
    'name': 'Julia Avolio',
    'src': 'Julia_Avolio.jpg'
  },
  {
    'name': 'Megan Watson',
    'src': 'Megan_Watson.jpg'
  },
  {
    'name': 'Thalia Hua',
    'src': 'Thalia_Hua.jpg'
  },
  {
    'name': 'Kellie Kim',
    'src': 'Kellie_Kim.jpg'
  },
  {
    'name': 'Morgan Martin',
    'src': 'Placeholder.jpg'
  },
  {
    'name': 'Stephanie Dephoure',
    'src': 'Stephanie_Dephoure.jpg'
  },
  {
    'name': 'Hafsa Zia',
    'src': 'Placeholder.jpg'
  },
  {
    'name': 'Gemma Postill',
    'src': 'Placeholder.jpg'
  }
]

const former = [
  "Sarah Freeman",
  "Sepand Alavifard",
  "Xin Xa",
  "Isabella Fan",
  "Laura Diamond",
  "Alex Spivak",
];

const Team = () => {
  return (
  <OuterWrapper>
    <Header>Founders</Header>
    <HeadshotsOuterWrapper>
      <FounderHeadshotWrapper>
        <Headshot src={`drtali.jpg`} />
        <BioWrapper>
          <Name>Dr. Tali Bogler</Name>
          <Bio><BioTitle>Chair of Family Practice Obstretrics</BioTitle><br/>St. Michael's Hospital, Toronto</Bio>
        </BioWrapper>
      </FounderHeadshotWrapper>
      <FounderHeadshotWrapper>
        <Headshot src={`drsheila.jpg`} />
        <BioWrapper>
          <Name>Dr. Sheila Wijayasinghe</Name>
          <Bio><BioTitle>Family Physician</BioTitle><br/>St. Michael's Hospital, Toronto<br/><br/><BioTitle>Medical Director, Primary Care Outreach</BioTitle><br/>Women's College Hospital, Toronto</Bio>
        </BioWrapper>
      </FounderHeadshotWrapper>
      <FounderHeadshotWrapper>
        <Headshot src={`dreliane.jpg`} />
        <BioWrapper>
          <Name>Dr. Eliane Shore</Name>
          <Bio><BioTitle>Assistant Professor, Obstetrics &#38; Gynaecology</BioTitle><br/>St. Michael's Hospital, Toronto</Bio>
        </BioWrapper>
      </FounderHeadshotWrapper>
    </HeadshotsOuterWrapper>
    <Header>Team Members</Header>
    <HeadshotsOuterWrapper>
      {students.map((value, index) => (
        <StudentsHeadshotWrapper key={index}>
          <StudentHeadshot src={`current-team/${value.src}`} />
          <BioWrapper>
            <Name>{value.name}</Name>
            {/* <Bio>MD 2025</Bio> */}
          </BioWrapper>
        </StudentsHeadshotWrapper>
      ))}
    </HeadshotsOuterWrapper>
    <Paragraph><em><b>Special thanks to our PPG Alumni:</b></em><br/><br/>{former.join(', ')}</Paragraph>
  </OuterWrapper>);
}

export default Team;