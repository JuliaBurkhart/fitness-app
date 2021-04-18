import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
background: var(--color-beige);
border-radius: 5px;
width: 375px;
height: 215px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

& img {
    position: absolute;
    top: 12.6px;
    left: 16px;
}

& span {
    position: absolute;
    top: 12px;
    right: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
}
`



function BrowserEntry () {
    return (
    <StyledDiv>
        <img src="images/heart.svg" alt=""/>
        <span>Neu</span>
        <h2>Titel des Programms</h2>
    </StyledDiv>
    )
}

export default BrowserEntry;