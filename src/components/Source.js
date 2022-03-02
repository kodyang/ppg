import React from 'react';

import styled from 'styled-components';

/*
{
    "date": "2020-04-04 16:10:47",
    "pictures": [
        "2020-04-04_16-10-47_B-kK7BcBG2L_1.jpg",
        "2020-04-04_16-10-47_B-kK7BcBG2L_2.jpg",
        "2020-04-04_16-10-47_B-kK7BcBG2L_3.jpg",
        "2020-04-04_16-10-47_B-kK7BcBG2L_4.jpg"
    ],
    "caption": "Swipe \u27a1\ufe0f to meet our team! \ud83d\udc69\ud83c\udffd\u200d\u2695\ufe0f\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f\ud83d\udc69\ud83c\udffc\u200d\u2695\ufe0f\n\u2800\nOur physician team is excited to help guide you through your pregnancy from a #socialdistance !\n\u2800\nWe will be featuring content from experts like lactation consultants, midwives, and social workers.\n\u2800\nWhich healthcare team member are you most excited to hear from? Comment below!\n\u2800\n#pandemicpregnancy #pushingthroughthepandemic #pregnancy #momtobe #maternity #maternalhealth #maternalmentalhealth #obstetrics #COVID19\n",
    "tags": "pandemicpregnancy, pushingthroughthepandemic, maternity, socialdistance, COVID19, maternalhealth, maternalmentalhealth, obstetrics, momtobe, pregnancy",
    "shortcode": "B-kK7BcBG2L",
    "id": 1
},
*/

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

/* <SpeechBubble style={{background: `url(${SpeechBubble1})`}} /> */

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