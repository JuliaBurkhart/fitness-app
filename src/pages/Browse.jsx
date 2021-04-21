import React from "react";
import BrowserEntry from "../components/BrowserEntry";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import SmallText from "../elements/SmallText";

const StyledDiv = styled.div`
margin-top: 75px;
padding: 0 20px;
`

const StyledSpan = styled.span`
    margin-top: 25px;
    margin-bottom: 17px;
`

function Browse () {
  return (
    <StyledDiv>
      <h2>Browse</h2>
      <StyledSpan><SmallText>Filter</SmallText></StyledSpan>
      <Link to="/program">
      <BrowserEntry />
      </Link>
     
      <BrowserEntry />
      <BrowserEntry />
    </StyledDiv>
      
  
  )
}

export default Browse;