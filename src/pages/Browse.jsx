import React from "react";
import BrowserEntry from "../components/BrowserEntry";
import styled from 'styled-components';


const StyledDiv = styled.div`
margin-top: 75px;
`

const StyledSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: inline-block;
    margin-top: 25px;
    margin-bottom: 17px;
`

function Browse () {
  return (
    <StyledDiv>
      <h2>Browse</h2>
      <StyledSpan>Filter</StyledSpan>
      <BrowserEntry />
      <BrowserEntry />
      <BrowserEntry />
    </StyledDiv>
      
  
  )
}

export default Browse;