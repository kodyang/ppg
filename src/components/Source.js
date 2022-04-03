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

  @media (max-width: 768px) {
    height: 90vw;
    width: 90vw;
  }
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
  const blobClient = props.containerClient.getBlobClient(pictures[0]);

  return (
    <OuterWrapper>
      <ImgLink href={`https://www.instagram.com/p/${shortcode}`} target="_blank">
        <SourceImg src={blobClient.url} />
      </ImgLink>
    </OuterWrapper>
  )
};

export default Source;