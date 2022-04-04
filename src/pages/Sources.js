import React, {useState, useEffect, useRef} from 'react';
import Source from '../components/Source';
import posts from '../posts.json';
import * as lunr from 'lunr';

import { BlobServiceClient } from '@azure/storage-blob';

import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 6vw 18vw 0;

  @media (max-width: 768px) {
    align-items: center;
    padding: 9vw 16px 16px;
  }
`;

const Header = styled.div`
  align-self: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 2vw;
`;

const Subheader = styled.div`
  align-self: center;
  font-size: 18px;
  margin-bottom: 1vw;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 6vw;
  }
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

  @media (max-width: 768px) {
    align-self: stretch;
    text-align: left;
    margin-top: 16px;
    display: none;
  }
`;

const ResultsRows = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2vw;

  @media (max-width: 768px) {
    margin-top: 24px;
    flex-direction: column;
  }
`;

const NoResults = styled.div`
  size: 24px;
`;

const idx = lunr(function() {
  this.field('tags');
  this.field('caption');

  posts.forEach((value, ind) => {
    this.add(value);
  })
});

const DEFAULT_RESULTS_HEADER = "Recent Posts:";

const blobSasUrl = "https://ppgimagestore.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=sco&sp=rtf&se=2023-04-04T08:06:38Z&st=2022-04-04T00:06:38Z&spr=https&sig=HdPeBj%2Fj%2BoPiMQhoATeXWT5Fmna5Oou6tdyjvihwv5s%3D";
const containerName = "ppgimages";

const Sources = () => {
  const blobServiceClient = new BlobServiceClient(blobSasUrl);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  
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
        {searchResults.length ? searchResults.map((element, ind) => {
            return (
              <Source data={element} key={ind} containerClient={containerClient} />
            )
          }) : (<NoResults>No Results Found</NoResults>)}
      </ResultsRows>
    </PageWrapper>
  );
}

export default Sources;