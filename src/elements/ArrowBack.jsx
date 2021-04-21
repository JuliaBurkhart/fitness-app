import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
display: inline-block;
position: relative;
background: transparent;
width: 17px;
height: 17px;
`

const StyledUp= styled.span`
position: absolute;
top: 4px;
left: -1px;
width: 11px;
border-bottom: 3px solid var(--color-blue-dark);
transform: rotate(-45deg);
`

const StyledDown = styled.span`
position: absolute;
top: 10px;
left: -1px;
width: 11px;
border-bottom: 3px solid var(--color-blue-dark);
transform: rotate(45deg);
`

const StyledHorizontal = styled.span`
position: absolute;
top: 7px;
left: 2px;
width: 16px;
border-bottom: 3px solid var(--color-blue-dark);
`

function ArrowBack() {
    return (
        <StyledDiv>
        <StyledUp />
        <StyledHorizontal />
        <StyledDown />
        </StyledDiv>
    )
}

export default ArrowBack;

