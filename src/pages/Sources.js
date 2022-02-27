import React, {useState, useEffect, useRef} from 'react';
import * as lunr from 'lunr';

import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 8vw 18vw 0;
`;

const Header = styled.div`
  align-self: center;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 2vw;
`;

const Subheader = styled.div`
  align-self: center;
  size: 18px;
  margin-bottom: 1vw;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  position: relative;
  border-top: 20px solid transparent;
  
`;

const LabelText = styled.span`
  position: absolute;
  left: 12px;
  top: 20px;
  transform: translateY(-50%);
  width: calc(100% -24px);
  color: #aaa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  transition: top 0.3s ease,
              color 0.3s ease,
              font-size 0.3s ease;

  input:not(:placeholder-shown) + & {
    top: -10px;
    font-size: 10px;
    color: #222;
  }
  input:focus + & {
    top: -10px;
    font-size: 10px;
    color: #222;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  &:before {
    box-sizing: border-box;
  }
  &:after {
    box-sizing: border-box;
  }
  width: 100%;
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 12px;
  font-size: 14px;
  background: #f2f2f2;
  border-radius: 3px;
`;

const ResultsRows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4vw;
`;

const idx = lunr(function() {
  this.field("tags");
  this.field('caption');
  this.ref('pictures');

  this.add({
    "date": "2020-04-05 14:05:13",
    "pictures": [
        [
            1,
            "2020-04-05_14-05-13_UTC_1.jpg"
        ],
        [
            2,
            "2020-04-05_14-05-13_UTC_2.jpg"
        ]
    ],
    "caption": "We are so thrilled to see the growing excitement and interest in our project!\n\u2800\nThank you for the questions - please keep them coming.\n\u2800\nWe will address some questions directly in posts like these. We will also tailor our posts and video content to answer your questions, so don\u2019t be disappointed if we don\u2019t get back to your question right away.\n\u2800\nKeep your eyes peeled for more to come!\n\u2800\n#PandemicPregnancy #PushingThroughThePandemic #duedateduringthepandemic\n#pregnancy #momtobe #maternity #birth #newborn #postpartum #breastfeeding\n#maternalheath #obstetrics #COVID19 #coronavirus #socialdistancing #physicaldistancing\n\u2800\nDisclaimer: The general information provided on this account is for informational purposes only and is not professional medical advice, diagnosis, treatment, or care, nor is it intended to be a substitute therefore. Always seek the advice of your healthcare provider in your jurisdiction to discuss any questions that you believe may be relevant to you or to someone else.\n",
    "tags": [
        "socialdistancing",
        "maternity",
        "breastfeeding",
        "PandemicPregnancy",
        "physicaldistancing",
        "pregnancy",
        "postpartum",
        "coronavirus",
        "obstetrics",
        "duedateduringthepandemic",
        "COVID19",
        "PushingThroughThePandemic",
        "momtobe",
        "birth",
        "maternalheath",
        "newborn"
    ]
  });
});

const Sources = () => {
  const isInitialMount = useRef(true);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      "date": "2020-04-11 23:38:28",
      "pictures": [
          [
              0,
              "2020-04-11_23-38-28_UTC.jpg"
          ]
      ],
      "caption": "@drsheilaw\u00a0sat down with Dr. Mark Yudin, an Ob/Gyn and reproductive infectious disease specialist from St. Michael\u2019s Hospital, to provide some information to expecting parents who are\u00a0#healthcareworkers\u00a0and/or\u00a0#essentialworkers\u00a0working on the front lines of the\u00a0#COVID19\u00a0pandemic.\n\u2800\nWe hope that this information can help address some of your common questions and concerns.\n\u2800\nPlease keep in mind that our understanding of COVID-19 is changing rapidly. As a result, all recommendations made are subject to change. We will make every effort to update our page as these changes occur. Please see our disclaimer in the bio section for more details.\n\u2800\nWhat questions would you like us to discuss with Dr. Yudin next time? Let us know in the comment section below!\n\u2800\n#PandemicPregnancy\u00a0#PushingThroughThePandemic\u00a0#duedateduringthepandemic\u00a0#pregnancy\u00a0#momtobe\u00a0#maternity\u00a0#maternalheath\u00a0#primarycare\u00a0#obstetrics\u00a0#coronavirus\u00a0#physicaldistancing\n\u2800\nDisclaimer: The general information provided on this account is for informational purposes only and is not professional medical advice, diagnosis, treatment, or care, nor is it intended to be a substitute therefore. Always seek the advice of your healthcare provider in your jurisdiction to discuss any questions that you believe may be relevant to you or to someone else.\n",
      "tags": [
          "maternity",
          "physicaldistancing",
          "PandemicPregnancy",
          "pregnancy",
          "coronavirus",
          "healthcareworkers",
          "duedateduringthepandemic",
          "COVID19",
          "PushingThroughThePandemic",
          "momtobe",
          "essentialworkers",
          "obstetrics",
          "maternalheath",
          "primarycare"
      ]
    },
    {
      "date": "2020-04-13 16:17:33",
      "pictures": [
          [
              1,
              "2020-04-13_16-17-33_UTC_1.jpg"
          ],
          [
              2,
              "2020-04-13_16-17-33_UTC_2.jpg"
          ],
          [
              3,
              "2020-04-13_16-17-33_UTC_3.jpg"
          ]
      ],
      "caption": "Today we\u2019re taking on a question we get asked about all the time in prenatal appointments!\n\u2800\nDo I need to sleep in a certain position while pregnant? Is lying on my back unsafe?\n\u2800\nThe answer is, you can sleep in whatever position you like! We move into all different positions after we fall asleep anyways. There is no evidence of harm or risk to the growing fetus when you sleep on your back. We recommend you do whatever feels most comfortable for you.\n\u2800\nSwipe through to see our detailed explanation.\n\u2800\nDo you have any tips to share for getting a good night\u2019s sleep while pregnant? Questions? Let us know in the comments below!\n\u2800\nReference: https://www.jogc.com/article/S1701-2163(16)32633-0/fulltext\n\u2800\n#PandemicPregnancy #PushingThroughThePandemic #duedateduringthepandemic #pregnancy #maternity #birth #newborn #postpartum #maternalheath #primarycare #obstetrics #coronavirus #physicaldistancing\n\u2800\nDisclaimer: The general information provided on this account is for informational purposes only and is not professional medical advice, diagnosis, treatment, or care, nor is it intended to be a substitute therefore. Always seek the advice of your healthcare provider in your jurisdiction to discuss any questions that you believe may be relevant to you or to someone else.\n",
      "tags": [
          "maternity",
          "physicaldistancing",
          "PandemicPregnancy",
          "pregnancy",
          "postpartum",
          "coronavirus",
          "obstetrics",
          "duedateduringthepandemic",
          "PushingThroughThePandemic",
          "birth",
          "maternalheath",
          "newborn",
          "primarycare"
      ]
    },
    {
      "date": "2020-04-14 01:02:44",
      "pictures": [
          [
              0,
              "2020-04-14_01-02-44_UTC.jpg"
          ]
      ],
      "caption": "Today, Sarah, one of our medical students, spoke with Dr. Lee Schofield about guidelines for exercise in pregnancy. Dr. @tridoclee is a family physician who also practices low risk obstetrics and sports & exercise medicine at St. Michael\u2019s Hospital and Pivot Sport Medicine and Orthopedics.\n\u2800\nWe hope that this information can help you make decisions about what the right level of activity is for you during your pregnancy.\n\u2800\nComing next, we will be diving into more details on exercise and pregnancy with a two-part Q&A video with Dr. Schofield.\n\u2800\nHow do you like to stay active in pregnancy? Please share your ideas in the comment section below!\n\u2800\nReference: https://csepguidelines.ca/guidelines-for-pregnancy/\n\u2800\n#PandemicPregnancy #PushingThroughThePandemic #duedateduringthepandemic #pregnancy #momtobe #maternity #birth #newborn #postpartum #maternalheath #primarycare #obstetrics #coronavirus #physicaldistancing\n\u2800\nDisclaimer: The general information provided on this account is for informational purposes only and is not professional medical advice, diagnosis, treatment, or care, nor is it intended to be a substitute therefore. Always seek the advice of your healthcare provider in your jurisdiction to discuss any questions that you believe may be relevant to you or to someone else.\n",
      "tags": [
          "maternity",
          "physicaldistancing",
          "PandemicPregnancy",
          "pregnancy",
          "postpartum",
          "coronavirus",
          "obstetrics",
          "duedateduringthepandemic",
          "PushingThroughThePandemic",
          "momtobe",
          "birth",
          "maternalheath",
          "newborn",
          "primarycare"
      ]
    },
  ]);

  const updateSearchString = (event) => {
    const v = event.target.value;
    setSearchString(v);
  }

  useEffect(() => {
    if (!isInitialMount) {
      const delayedSearch = setTimeout(() => {
        console.log(`Searching for: ${searchString}`);
        
        setSearchResults(idx.search(searchString));
      }, 2000);

      return () => clearTimeout(delayedSearch);
    }
  }, [searchString])

  return (
    <PageWrapper>
      <Header>Evidence-Based Science</Header>
      <Subheader>Search through our catalogue of social media posts for scientific journal references</Subheader>

      <StyledLabel>
        <StyledInput value={searchString} onChange={e => updateSearchString(e)} placeholder="&nbsp;" />
        <LabelText>Keyword Search</LabelText>
      </StyledLabel>
      <ResultsRows>
        {searchResults.map((element, ind) => {
            return (
              <div key="ind">{JSON.stringify(element)}</div>
            )
          })}
      </ResultsRows>
    </PageWrapper>
  );
}

export default Sources;