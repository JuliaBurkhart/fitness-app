import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 15px;
`

const StyledCriss = styled.span`
position: absolute;
right: 21px;
top: 25px;
width: 19px;
border-bottom: 3px solid #1D2A73;
transform: rotate(45deg);
`

const StyledCross = styled.span`
position: absolute;
right: 21px;
top: 25px;
width: 19px;
border-bottom: 3px solid #1D2A73;
transform: rotate(-45deg);
`

function XClose() {
    return (
        <StyledDiv>
        <StyledCriss />
        <StyledCross />
        </StyledDiv>
    )
}

export default XClose;