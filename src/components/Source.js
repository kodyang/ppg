import React from 'react';

import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
`;

const SourceImg = styled.img`
  height: 20vw;
  width: 20vw;
  object-fit: cover;
`;

const ImgLink = styled.a``;


const Source = (props) => {
  const {
    date,
    pictures,
    caption,
    tags,
    shortcode
  } = props.data;

  return (
    <OuterWrapper>
      <ImgLink href={`https://www.instagram.com/p/${shortcode}`} target="_blank">
        <SourceImg src={`/pandemicpregnancyguide/${pictures[0]}`} />
      </ImgLink>
    </OuterWrapper>
  )
};

export default Source;