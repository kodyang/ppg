import React, {useState, useEffect, useRef} from 'react';
import Source from '../components/Source';
import posts from '../posts.json';
import * as lunr from 'lunr';

import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 6vw 18vw 0;
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

const ResultsHeader = styled.div`
  font-size: 18px;
  margin-top: 2vw;
  // font-weight: bold;
`;

const ResultsRows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2vw;
`;

const idx = lunr(function() {
  this.field('tags');
  this.field('caption');

  posts.forEach((value, ind) => {
    this.add(value);
  })
});

const DEFAULT_RESULTS_HEADER = "Recent Posts:";

const Sources = () => {
  const isInitialMount = useRef(true);
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState(posts.slice(-9).reverse());
  const [resultsHeader, setResultsHeader] = useState(DEFAULT_RESULTS_HEADER);

  const updateSearchString = (event) => {
    const v = event.target.value;
    setSearchString(v);
  };

  useEffect(() => {
    // Search
    if (!isInitialMount.current) {
      const delayedSearch = setTimeout(() => {
        if (searchString.trim() === "") {
          setResultsHeader(DEFAULT_RESULTS_HEADER);
          setSearchResults(posts.slice(-9).reverse());
        } else {
          const results = idx.search(searchString);
          setResultsHeader(`Search Results for "${searchString}"`);
          setSearchResults(results.map((val) => posts[parseInt(val.ref)]));  
        }
      }, 600);

      return () => clearTimeout(delayedSearch);
    } else {
      isInitialMount.current = false;
    }
  }, [searchString]);

  // useEffect(() => {
  //   // 
  //   console.log(posts);
  //   setSearchResults(posts);
  // }, );

  return (
    <PageWrapper>
      <Header>Catalogue Search</Header>
      <Subheader>Search through our catalogue of social media posts for any specific topic or phrase</Subheader>

      <StyledLabel>
        <StyledInput value={searchString} onChange={e => updateSearchString(e)} placeholder="&nbsp;" />
        <LabelText>Keyword Search</LabelText>
      </StyledLabel>
      <ResultsHeader>{resultsHeader}</ResultsHeader>
      <ResultsRows>
        {searchResults.map((element, ind) => {
            return (
              <Source data={element} key={ind} />
              // <div key="ind">{JSON.stringify(element)}</div>
            )
          })}
      </ResultsRows>
    </PageWrapper>
  );
}

export default Sources;