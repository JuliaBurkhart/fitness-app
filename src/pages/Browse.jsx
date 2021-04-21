import React from "react";
import BrowserEntry from "../components/BrowserEntry";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SmallText from "../elements/SmallText";

const PageDiv = styled.div`
margin-top: 75px;
padding: 0 20px;
`

const Span = styled.span`
    margin-top: 25px;
    margin-bottom: 17px;
`

function Browse () {
  return (
    <PageDiv>
      <h2>Browse</h2>
      <Span><SmallText>Filter</SmallText></Span>
      <Link to="/program">
      <BrowserEntry />
      </Link>
     
      <BrowserEntry />
      <BrowserEntry />
    </PageDiv>
      
  
  )
}

export default Browse;